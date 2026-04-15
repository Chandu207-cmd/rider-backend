const pool = require("../config/db");

const createUser = async (full_name, phone) => {
  const result = await pool.query(
    "INSERT INTO users (full_name, phone) VALUES ($1, $2) RETURNING *",
    [full_name, phone]
  );
  return result.rows[0];
};

const getUsers = async () => {
  const result = await pool.query("SELECT * FROM users ORDER BY id DESC");
  return result.rows;
};

module.exports = { createUser, getUsers };
