const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
  try {
    const payload = {
      user: {
        id: req.body.id,
      },
    };
    const secret = config.get('jwtSecret');

    jwt.sign(payload, secret, { expiresIn: '1y' }, (err, token) => {
      if (err) throw err;

      const data = { token };
      res.json(data);
    });
  } catch (err) {
    res.status(401).json({ msg: 'Token generate error' });
  }
};
