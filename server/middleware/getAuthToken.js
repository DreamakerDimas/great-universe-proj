const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  try {
    const payload = {
      user: {
        id: req.body.id,
      },
    };

    jwt.sign(
      payload,
      config.get('jwtSecret'),
      { expiresIn: '10y' },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    res.status(401).json({ msg: 'Token generate error' });
  }
};
