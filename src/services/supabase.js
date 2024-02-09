import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://ifdrawjouatjpnevoytm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZHJhd2pvdWF0anBuZXZveXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4Njk3NDUsImV4cCI6MjAyMjQ0NTc0NX0.WqTdlhMagFskZa3hHNtPiLIAgvKxujxaPkkDskqyZ2s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
