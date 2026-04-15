const bookingModel = require("../models/booking.model");

const createBooking = async (req, res) => {
  try {
    const { user_id, pickup_location_id, drop_location_id, scheduled_time } = req.body;

    if (!user_id || !pickup_location_id || !drop_location_id || !scheduled_time) {
      return res.status(400).json({ message: "All fields required" });
    }

    const booking = await bookingModel.createBooking(
      user_id,
      pickup_location_id,
      drop_location_id,
      scheduled_time
    );

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await bookingModel.getBookings();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBooking,
  getBookings,
};
