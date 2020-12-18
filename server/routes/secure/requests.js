const router = require('express').Router(),
  { isAdmin } = require('../../middleware/authorization/'),
  {
    createRequest,
    getAllRequests,
    getSpecificRequest,
    updateRequest,
    deleteRequest,
    fetchAllRequests,
    deleteRequest
  } = require('../../controllers/requests');

router.get('/all', isAdmin(), fetchAllRequests);

router.post('/', createRequest);

router.get('/:id', getSpecificRequest);

router.get('/', getAllRequests);

router.patch('/:id', updateRequest);

router.delete('/:id', deleteRequest);

module.exports = router;
