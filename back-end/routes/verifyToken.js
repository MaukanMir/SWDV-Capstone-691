const jwt = require("jsonwebtoken");

const checkToken = (req, res, next) => {

  const authHeaderInfo = req.headers.token;
  if (authHeaderInfo) {
    const tokenInfo = authHeaderInfo.split(" ")[1];
    jwt.verify(tokenInfo, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("Token is not verified!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You have not been authenticated!");
  }
};

const checkTokenAndAuthorization = (req, res, next) => {
  checkToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("cannot be verified!");
    }
  });
};

const checkTokenAndAdmin = (req, res, next) => {
  checkToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  checkToken,
  checkTokenAndAuthorization,
  checkTokenAndAdmin,
};