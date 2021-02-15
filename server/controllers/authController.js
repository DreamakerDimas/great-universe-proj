const User = require('../models/User');
const bcrypt = require('bcryptjs');

module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    let foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    req.body.id = foundUser.id;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exist' });
    }

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    req.body.id = user.id;
    next();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
