import connectMongoDB from "@/app/libs/mongodb";
import Booking from "@/app/models/bookingSchema";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const {
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
  } = await request.json();
  await connectMongoDB();
  await Booking.create({
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
  return NextResponse.json({ message: "Booking Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const bookings = await Booking.find();
  return NextResponse.json({ bookings });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Booking.findByIdAndDelete(id);
  return NextResponse.json({ message: "Booking deleted" }, { status: 200 });
}
