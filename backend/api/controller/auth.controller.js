const login = async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.sendStatus(421);
  }

  if (login === process.env.LOGIN && password === process.env.PASSWORD) {
    res.json({ auth: true });
  }

  res.json({ auth: false });
};

const authController = {
  login,
};

module.exports = {
  authController,
};
