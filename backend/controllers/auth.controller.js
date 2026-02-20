import User from "../models/user.model.js";
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 5);
    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(201).send("User has been Created.");
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect) return next(createError(400, "Wrong password!"));

    // Use JWT_KEY from .env
    const token = jwt.sign(
      { id: user._id, isSeller: user.isSeller },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        sameSite: "lax", // or "none" if using https
        secure: false,   // true if HTTPS
      })
      .status(200)
      .send(info);
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).send({ message: err.message });
  }
};

export const logout = async (req, res) => {
  res
    .clearCookie("AccessToken", {
      sameSite: "lax",
      secure: false,
    })
    .status(200)
    .send("User has been logged out.");
};