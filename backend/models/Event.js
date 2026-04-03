import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: String,
    type: String,
    date: String,
    startDate: String,
    endDate: String,
    location: String,
    venue: String,
    category: {
      type: String,
      enum: ["planner", "performer", "crew"],
    },
    details: Object,
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);