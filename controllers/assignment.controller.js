const assignmentModel = require("../models/assignment.model");

const assignDriver = async (req, res) => {
  try {
    const { booking_id, driver_id } = req.body;

    if (!booking_id || !driver_id) {
      return res.status(400).json({ message: "All fields required" });
    }

    const assignment = await assignmentModel.assignDriver(
      booking_id,
      driver_id
    );

    res.status(201).json(assignment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getAssignments = async (req, res) => {
  try {
    const assignments = await assignmentModel.getAssignments();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { assignDriver, getAssignments };
