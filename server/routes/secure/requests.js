const router = require('express').Router(),
  { isAdmin } = require('../../middleware/authorization/'),
  {
    createRequest,
    getAllRequests,
    getSpecificRequest,
    updateRequest,
    fetchAllRequests,
    deleteRequest
  } = require('../../controllers/requests');

router.get('/all', fetchAllRequests);

router.post('/', createRequest);

router.get('/:id', getSpecificRequest);

router.get('/', getAllRequests);

router.patch('/:id', updateRequest);

router.delete('/:id', deleteRequest);

module.exports = router;
