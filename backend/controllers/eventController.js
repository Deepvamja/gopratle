import Event from "../models/Event.js";
import { eventSchema } from "../validators/eventValidator.js";

export const createEvent = async (req, res) => {
  try {
    const validated = eventSchema.parse(req.body);

    const event = await Event.create(validated);

    res.status(201).json({
      success: true,
      data: event,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};