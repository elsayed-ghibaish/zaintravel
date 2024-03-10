import connectMongoDB from "@/app/libs/mongodb";
import Booking from "@/app/models/bookingSchema";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const {
    newFullName: FullName,
    newPhone: Phone,
    newBookingDay: BookingDay,
    newTypeOfTrip: TypeOfTrip,
    newEndlectures: Endlectures,
    newselectedCity: selectedCity,
    newselectedArea: selectedArea,
    newtiming: timing,
    newpaymentType: paymentType,
    newconfirmation: confirmation,
  } = await request.json();
  await connectMongoDB();
  await Booking.findByIdAndUpdate(id, {
    FullName,
    Phone,
    BookingDay,
    TypeOfTrip,
    Endlectures,
    selectedCity,
    selectedArea,
    timing,
    paymentType,
    confirmation,
  });
  return NextResponse.json({ message: "Booking updated" }, { status: 200 });
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const booking = await Booking.findOne({ _id: id });
  return NextResponse.json({ booking }, { status: 200 });
}
