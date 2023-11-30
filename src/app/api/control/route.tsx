import connectMongoDB from "@/app/libs/mongodb";
import Control from "@/app/models/controlSchema";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  const {
    BookingStartDate,
    BookingDays,
    filterEnabledTravel,
    BookingStartTime,
    BookingEndTime,
    BagStartDate,
    BagDays,
    filterEnabledTravelBag,
    BagStartTime,
    BagEndTime,
  } = await request.json();
  await connectMongoDB();
  await Control.create({
    BookingStartDate,
    BookingDays,
    filterEnabledTravel,
    BookingStartTime,
    BookingEndTime,
    BagStartDate,
    BagDays,
    filterEnabledTravelBag,
    BagStartTime,
    BagEndTime,
  });
  return NextResponse.json({ message: "Control Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const controls = await Control.find();
  return NextResponse.json({ controls });
}

export async function DELETE(request: any) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Control.findByIdAndDelete(id);
  return NextResponse.json({ message: "Control deleted" }, { status: 200 });
}
