const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const createUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const storeUser = await createUser.save();
    res.status(201).json(storeUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post('/login', async (req, res) => {
    try{
        const userInfo = await User.findOne(
            {
                username: req.body.username
            }
        );
        !userInfo && res.status(401).json("Wrong User Name");
        const securedPassword = CryptoJS.AES.decrypt(
            userInfo.password,
            process.env.PASS_SEC
        );
        const initialPassword = securedPassword.toString(CryptoJS.enc.Utf8);
        const newPassword = req.body.password;
        initialPassword !== newPassword && 
            res.status(401).json("Wrong information");
        const accessToken = jwt.sign(
        {
            id: userInfo._id,
            isAdmin: userInfo.isAdmin,
        },
        process.env.JWT_SEC,
            {expiresIn:"3d"}
        );
  
        const { password, ...others } = userInfo._doc;  
        res.status(200).json({...others, accessToken});

    }catch(err){
        res.status(500).json(err);
    }

});

module.exports = router;