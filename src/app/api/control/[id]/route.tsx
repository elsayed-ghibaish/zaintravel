import connectMongoDB from "@/app/libs/mongodb";
import Control from "@/app/models/controlSchema";
import { NextResponse } from "next/server";

export async function PUT(request: any, { params }: any) {
  const { id } = params;
  const {
    newBookingStartDate: BookingStartDate,
    newBookingDays: BookingDays,
    newfilterEnabledTravel: filterEnabledTravel,
    newBookingStartTime: BookingStartTime,
    newBookingEndTime: BookingEndTime,
    newBagStartDate: BagStartDate,
    newBagDays: BagDays,
    newfilterEnabledTravelBag: filterEnabledTravelBag,
    newBagStartTime: BagStartTime,
    newBagEndTime: BagEndTime,
  } = await request.json();
  await connectMongoDB();
  await Control.findByIdAndUpdate(id, {
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
  return NextResponse.json({ message: "Control updated" }, { status: 200 });
}

export async function GET(request: any, { params }: any) {
  const { id } = params;
  await connectMongoDB();
  const control = await Control.findOne({ _id: id });
  return NextResponse.json({ control }, { status: 200 });
}
