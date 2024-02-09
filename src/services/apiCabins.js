import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    console.log(error);
    throw new Error("cabins could not be loaded");
  }

  return data;
}

export async function createEditCabins(newCabin, id) {
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  console.log(newCabin);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replace("/", "");

  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;
  //https://ifdrawjouatjpnevoytm.supabase.co/storage/v1/object/public/cabin-images/cabin-007.jpg

  console.log(hasImagePath);
  console.log(imagePath);

  let query = supabase.from("cabins");

  //create cabin
  if (!id) query = query.insert([{ ...newCabin, image: imagePath }]);

  //edit cabin
  if (id)
    query = query
      .update([{ ...newCabin, image: imagePath }])
      .eq("id", id)
      .order("created_at", { ascending: true });

  const { data, error } = await query.select().single();

  if (error) {
    console.log(error);
    throw new Error("cabins could not be created");
  }

  //2. Upload image
  if (hasImagePath) return data;
  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabin.image);

  // 3. Delete the cabin IF there was an error uplaoding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.log(storageError);
    throw new Error(
      "cabin image could not be uploaded and new cabin could not be created"
    );
  }

  return data;
}

export async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("cabins could not be deleted");
  }

  return data;
}
