import mongoose, { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    FullName: String,
    Phone: String,
    BookingDay: Date,
    TypeOfTrip: String,
    Endlectures: String,
    selectedCity: String,
    selectedArea: String,
    timing: String,
    paymentType: String,
    confirmation: String,
  },
  {
    timestamps: true,
  }
);

const Booking =
  mongoose.models.Booking || mongoose.model("Booking", bookingSchema);

export default Booking;
