const router = require('express').Router(),
  { isAdmin } = require('../../middleware/authorization/'),
  {
    createTask,
    getAllTasks,
    getSpecificTask,
    updateTask,
    deleteTask,
    fetchAllTasks
  } = require('../../controllers/tasks');

router.get('/all', isAdmin(), fetchAllTasks);

router.post('/', createTask);

router.get('/:id', getSpecificTask);

router.get('/', getAllTasks);

router.patch('/:id', updateTask);

router.delete('/:id', deleteTask);

module.exports = router;
