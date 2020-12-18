const mongoose = require('mongoose'),
  Request = require('../db/models/request');

/**
 * Admin route fetchn all user
 * @param {}
 * @return {user}
 */
exports.fetchAllRequests = async (req, res) => {
  try {
    const request = await request.find();
    res.json(requests);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
// ***********************************************//
// Create a task
// ***********************************************//
exports.createRequest = async (req, res) => {
  console.log('hello');
  try {
    const request = await new Request({
      ...req.body,
      owner: req.user._id
    });
    await request.save();
    res.status(201).json(request);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};
// ***********************************************//
// Get a specific task
// ***********************************************//
exports.getSpecificRequest = async (req, res) => {
  try {
    const _id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(400).send('not a valid id');
    }
    const task = await Task.findOne({
      _id,
      owner: req.user._id
    });
    if (!task) return res.status(404).send();
    res.json(task);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

// ***********************************************//
// Get all tasks
// /tasks?completed=true
// /tasks?limit=10&skip=10
// /tasks?sortBy=createdAt:asc
// /tasks?sortBy=dueDate:desc
// ***********************************************//
exports.getAllRequests = async (req, res) => {
  const match = {},
    sort = {};

  if (req.query.completed) match.completed = req.query.completed === 'true';

  if (req.query.sortBy) {
    const parts = req.query.sortBy.split(':');
    sort[parts[0]] = parts[1] === 'desc' ? -1 : 1;
  }
  try {
    await req.user
      .populate({
        path: 'tasks',
        match,
        options: {
          limit: parseInt(req.query.limit),
          skip: parseInt(req.query.skip),
          sort
        }
      })
      .execPopulate();
    res.json(req.user.tasks);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
// ***********************************************//
// Update a task
// ***********************************************//
exports.updateRequest = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed', 'dueDate'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'Invalid updates!' });
  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!task) return res.status(404).json({ error: 'task not found' });
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.json(task);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

// ***********************************************//
// Delete a task
// ***********************************************//
exports.deleteRequest = async (req, res) => {
  try {
    const request = await Request.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!request) return res.status(404).json({ error: 'request not found' });
    res.json({ message: 'request has been deleted' });
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};
