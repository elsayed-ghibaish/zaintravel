import EditBagForm from "@/app/ui/EditBagForm";

const getBagById = async (id:any) => {
  try {
    const serverAddress = process.env.NEXT_PUBLIC_API_URL
    const res = await fetch(`${serverAddress}/api/bag/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch Bag");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditBag({ params }:any) {

  const { id }:any = params;
  const { bag } = await getBagById(id);
  const { FullName, Phone, BookingDay, bagType, selectedCity, selectedArea, paymentType,  }:any = bag;

  return <EditBagForm id={id} FullName={FullName} Phone={Phone} BookingDay={BookingDay}
  bagType={bagType} selectedCity={selectedCity} selectedArea={selectedArea} paymentType={paymentType} />;
}
