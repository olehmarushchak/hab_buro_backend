const login = async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.sendStatus(421);
  }

  const { LOGIN, PASSWORD } = process.env;

  if (login === LOGIN && password === PASSWORD) {
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
