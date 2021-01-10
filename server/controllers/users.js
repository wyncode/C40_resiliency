const User = require('../db/models/user'),
  cloudinary = require('cloudinary').v2,
  jwt = require('jsonwebtoken');
// {
//   sendWelcomeEmail,
//   sendCancellationEmail,
//   forgotPasswordEmail
// } = require('../emails/');

/**
 * Admin route fetch all user
 * @param {}
 * @return {user}
 */
exports.fetchAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
};

/**
 * Create a user
 * @param {firstName, lastName, dob, email, password, phone, address, city,
 * state, zip}
 * @return {user}
 */
exports.createUser = async (req, res) => {
  const {
    orgName,
    positionTitle,
    aidType,
    aidDesc,
    firstName,
    lastName,
    dob,
    email,
    password,
    phone,
    address,
    city,
    state,
    zip,
    logo,
    photo
  } = req.body;
  try {
    const user = new User({
      orgName,
      positionTitle,
      aidType,
      aidDesc,
      firstName,
      lastName,
      dob,
      email,
      password,
      phone,
      address,
      city,
      state,
      zip,
      logo,
      photo
    });
    const token = await user.generateAuthToken();
    // sendWelcomeEmail(user.email, user.firstName);
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    user.save();
    res.status(201).json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

/**
 * @param {email, password}
 * Login a user
 * @return {user}
 */
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();
    res.cookie('jwt', token, {
      httpOnly: true,
      sameSite: 'Strict',
      secure: process.env.NODE_ENV !== 'production' ? false : true
    });
    res.json(user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

/**
 * @param {email}
 * Password Reset Request
 * This route sends an email that the
 * user must click within 10 minutes
 * to reset their password.
 * @return {}
 */
exports.requestPasswordReset = async (req, res) => {
  try {
    const { email } = req.query;
    console.log('IS IT HERE', email);
    const user = await User.findOne({ email });
    console.log('HOW ABOUT HERE', email);
    if (!user) throw new Error('no user found');
    const token = jwt.sign(
      { _id: user._id.toString(), name: user.firstName + ' ' + user.lastName },
      process.env.JWT_SECRET,
      {
        expiresIn: '10m'
      }
    );
    forgotPasswordEmail(email, token);
    res.json({ message: 'reset password email sent' });
  } catch (e) {
    res.json({ error: e.toString() });
  }
};

/**
 * @param {token}
 * Redirect to password reset page
 * @return {}
 */
exports.passwordRedirect = async (req, res) => {
  try {
    const { token } = req.params;
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
      if (err) throw new Error(err.message);
    });
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: 600000,
      sameSite: 'Strict'
    });
    res.redirect(process.env.URL + '/updatepassword');
  } catch (e) {
    res.json({ error: e.toString() });
  }

  //Authenticated routes
};

/**
 * @param {{updates}}
 * Update a user
 * @return {user}
 */

exports.updateCurrentUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    'firstName',
    'lastName',
    'email',
    'password',
    'avatar'
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).send({ error: 'invalid updates!' });
  try {
    updates.forEach((update) => (req.user[update] = req.body[update]));
    await req.user.save();
    res.json(req.user);
  } catch (e) {
    res.status(400).json({ error: e.toString() });
  }
};

/**
 * @param {}
 * Logout a user
 * @return {}
 */
exports.logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.cookies.jwt;
    });
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'logged out' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

/**
 * @param {}
 * Logout all devices
 * @return {}
 */
exports.logoutAllDevices = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'all devices logged out' });
  } catch (e) {
    res.status(500).send();
  }
};
/**
 * @param {}
 * Delete a user
 * @return {}
 */
exports.deleteUser = async (req, res) => {
  try {
    await req.user.remove();
    // sendCancellationEmail(req.user.email, req.user.firstName);
    res.clearCookie('jwt');
    res.json({ message: 'user deleted' });
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
/**
 * @param {image}
 * Upload avatar
 * @return {}
 */
exports.uploadAvatar = async (req, res) => {
  try {
    const response = await cloudinary.uploader.upload(
      req.files.avatar.tempFilePath
    );
    req.user.avatar = response.secure_url;
    await req.user.save();
    res.json(response);
  } catch (e) {
    res.json({ error: e.toString() });
  }
};

/**
 * @param {password}
 * Update password
 * @return {}
 */
exports.updatePassword = async (req, res) => {
  try {
    req.user.password = req.body.password;
    await req.user.save();
    res.clearCookie('jwt');
    res.json({ message: 'password updated successfully' });
  } catch (e) {
    res.json({ error: e.toString() });
  }
};
