import mongoose, { Schema } from "mongoose";

const controlSchema = new Schema(
  {
    BookingStartDate: Date,
    BookingDays: Number,
    filterEnabledTravel: Boolean,
    BookingStartTime: String,
    BookingEndTime: String,
    BagStartDate: Date,
    BagDays: Number,
    filterEnabledTravelBag: Boolean,
    BagStartTime: String,
    BagEndTime: String,
  },
  {
    timestamps: true,
  }
);

const Control =
  mongoose.models.Control || mongoose.model("Control", controlSchema);

export default Control;
