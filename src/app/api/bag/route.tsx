import connectMongoDB from "@/app/libs/mongodb";
import Bag from "@/app/models/bagSchema";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const {
    FullName,
    Phone,
    BookingDay,
    bagType,
    selectedCity,
    selectedArea,
    paymentType,
    confirmation,
  } = await request.json();
  await connectMongoDB();
  await Bag.create({
    FullName,
    Phone,
    BookingDay,
    bagType,
    selectedCity,
    selectedArea,
    paymentType,
    confirmation,
  });
  return NextResponse.json({ message: "Bag Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const bags = await Bag.find();
  return NextResponse.json({ bags });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Bag.findByIdAndDelete(id);
  return NextResponse.json({ message: "Bag deleted" }, { status: 200 });
}
