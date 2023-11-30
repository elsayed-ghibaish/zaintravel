import connectMongoDB from "@/app/libs/mongodb";
import Bag from "@/app/models/bagSchema";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const {
    newFullName: FullName,
    newPhone: Phone,
    newBookingDay: BookingDay,
    newbagType: bagType,
    newselectedCity: selectedCity,
    newselectedArea: selectedArea,
    newpaymentType: paymentType,
    newconfirmation: confirmation,
  } = await request.json();
  await connectMongoDB();
  await Bag.findByIdAndUpdate(id, {
    FullName,
    Phone,
    BookingDay,
    bagType,
    selectedCity,
    selectedArea,
    paymentType,
    confirmation,
  });
  return NextResponse.json({ message: "Bag updated" }, { status: 200 });
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const bag = await Bag.findOne({ _id: id });
  return NextResponse.json({ bag }, { status: 200 });
}
