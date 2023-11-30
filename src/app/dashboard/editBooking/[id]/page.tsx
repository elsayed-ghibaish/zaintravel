import EditBookingForm from "@/app/ui/EditBookingForm";

const getBookingById = async (id:any) => {
  try {
    const serverAddress = process.env.NEXT_PUBLIC_API_URL
    const res = await fetch(`${serverAddress}/api/booking/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Booking");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditBooking({ params }:any) {

  const { id }:any = params;
  const { booking } = await getBookingById(id);
  const { FullName, Phone, BookingDay, TypeOfTrip, selectedCity, selectedArea, paymentType,  }:any = booking;

  return <EditBookingForm id={id} FullName={FullName} Phone={Phone} BookingDay={BookingDay}
  TypeOfTrip={TypeOfTrip} selectedCity={selectedCity} selectedArea={selectedArea} paymentType={paymentType} />;
}
