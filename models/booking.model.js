const pool = require("../config/db");

const createBooking = async (user_id, pickup_location_id, drop_location_id, scheduled_time) => {
  const result = await pool.query(
    `INSERT INTO bookings 
     (user_id, pickup_location_id, drop_location_id, scheduled_time)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [user_id, pickup_location_id, drop_location_id, scheduled_time]
  );

  return result.rows[0];
};

const getBookings = async () => {
  const result = await pool.query(`
    SELECT b.*, u.full_name 
    FROM bookings b
    JOIN users u ON b.user_id = u.id
    ORDER BY b.id DESC
  `);

  return result.rows;
};

module.exports = {
  createBooking,
  getBookings,
};
