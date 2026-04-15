const pool = require("../config/db");

const assignDriver = async (booking_id, driver_id) => {
  const result = await pool.query(
    `INSERT INTO assignments (booking_id, driver_id)
     VALUES ($1, $2)
     RETURNING *`,
    [booking_id, driver_id]
  );

  return result.rows[0];
};

const getAssignments = async () => {
  const result = await pool.query(`
    SELECT a.*, b.status AS booking_status, d.full_name AS driver_name
    FROM assignments a
    JOIN bookings b ON a.booking_id = b.id
    JOIN drivers d ON a.driver_id = d.id
    ORDER BY a.id DESC
  `);

  return result.rows;
};

module.exports = {
  assignDriver,
  getAssignments,
};
