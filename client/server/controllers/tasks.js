const mongoose = require('mongoose'),
  Task = require('../db/models/task');

/**
 * Admin route fetchn all user
 * @param {}
 * @return {user}
 */
exports.fetchAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
