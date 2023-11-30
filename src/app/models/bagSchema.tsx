import mongoose, { Schema } from "mongoose";

const bagSchema = new Schema(
  {
    FullName: String,
    Phone: String,
    BookingDay: Date,
    bagType: String,
    selectedCity: String,
    selectedArea: String,
    paymentType: String,
    confirmation: String,
  },
  {
    timestamps: true,
  }
);

const Bag =
  mongoose.models.Bag || mongoose.model("Bag", bagSchema);

export default Bag;
