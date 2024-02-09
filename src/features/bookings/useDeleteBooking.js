import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryclient = useQueryClient();
  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: (bookingId) => deleteBookingApi(bookingId),
    onSuccess: () => {
      queryclient.invalidateQueries({
        queryKey: ["bookings"],
      });

      toast.success(`Booking successfully deleted`);
    },
    onError: () => toast.error(`Booking could not be deleted`),
  });

  return { deleteBooking, isDeleting };
}
