const router = require('express').Router(),
  {
    updateCurrentUser,
    logoutUser,
    logoutAllDevices,
    deleteUser,
    uploadAvatar,
    updatePassword,
    fetchAllUsers
  } = require('../../controllers/users');

router.patch('/me', updateCurrentUser);
router.post('/logout', logoutUser);
router.post('/logoutAll', logoutAllDevices);
router.delete('/', deleteUser);
router.post('/avatar', uploadAvatar);
router.put('/password', updatePassword);
router.get('/all', fetchAllUsers);

module.exports = router;
