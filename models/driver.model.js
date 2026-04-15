const pool = require("../config/db");

const getDrivers = async () => {
  const result = await pool.query("SELECT * FROM drivers WHERE is_verified = true");
  return result.rows;
};

module.exports = { getDrivers };
