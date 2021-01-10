const router = require('express').Router(),
  {
    createUser,
    loginUser,
    requestPasswordReset,
    passwordRedirect,
    fetchAllUsers
  } = require('../../controllers/users');

router.post('/', createUser);

router.post('/login', loginUser);
router.get('/password', requestPasswordReset);
router.get('/password/:token', passwordRedirect);
router.get('/all', fetchAllUsers);

module.exports = router;
