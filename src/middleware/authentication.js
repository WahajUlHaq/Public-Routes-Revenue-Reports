const Cryptr = require("cryptr");
const jwt = require("jsonwebtoken");
require('dotenv').config()

const cryptr = new Cryptr(process.env.CRYPT_SECRET);
const User = require("../model/User");
const errorStrings = require("../configs/errorStrings");

const authenticateUser = async (req, res, next) => {
  try {
    const header = req.header("Authorization") || "";
    const token = header.replace("Bearer ", "");
    const decryptedToken = cryptr.decrypt(token);
    const decoded = jwt.verify(decryptedToken, process.env.JWT_SECRET);
    
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
      isActive: true,
    });

    if (!user) {
      throw new Error(errorStrings.NOT_AUTHENTICATED);
    }

    req.token = decryptedToken;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({error: errorStrings.NOT_AUTHENTICATED});
  }
};

module.exports = authenticateUser;
