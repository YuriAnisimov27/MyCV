const {Router} = require('express');
const User = require('../models/User');

const router = Router();

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.send(users);
});
