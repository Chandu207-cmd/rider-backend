console.log("SERVER RUNNING");

const express = require("express");
const pool = require("./config/db");

const app = express();
app.use(express.json());

const userRoutes = require("./routes/user.routes");
const bookingRoutes = require("./routes/booking.routes");
const assignmentRoutes = require("./routes/assignment.routes");

app.get("/", (req, res) => {
  res.send("Rider Backend Working");
});

app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.use("/users", userRoutes);

app.use("/bookings", bookingRoutes);

app.use("/assignments", assignmentRoutes);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
