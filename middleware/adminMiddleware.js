const admin = async (req, res, next) => {
    try {
      if (req.user && req.user.isAdmin) {
        next();
      } else {
        return res.status(403).json({ msg: 'Access denied, admin only' });
      }
    } catch (err) {
      console.error('Admin Middleware Error:', err.message);
      res.status(500).send('Server error');
    }
  };
  
  module.exports = admin;
  