import user from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const register = async (req, res) => {
  try {
    const { fullname, email, dob, password, contact, usertype } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new user({
      fullname,
      email,
      dob,
      password: hashedPassword,
      contact,
      usertype,
    });
    const User = await newUser.save();
    const token = jwt.sign(
      {
        id: User._id,
        usertype: User.usertype,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "3d",
      }
    );
    const returnUser = {
      fullname: User.fullname,
      email: User.email,
      dob: User.dob,
      contact: User.contact,
      usertype: User.usertype,
      token: token,
    };
    res.status(201).json(returnUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = await user.findOne({
      email: email,
    });
    if (!User) {
      return res.status(400).json({
        message: "user not exist!",
      });
    }
    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "password is incorrect!",
      });
    }
    const token = jwt.sign(
      {
        id: User.id,
        usertype: User.usertype,
      },
      process.env.JWT_KEY,
      {
        expiresIn: "3d",
      }
    );

    const returnUser = {
      fullname: User.fullname,
      email: User.email,
      contact: User.contact,
      usertype: User.usertype,
      token: token,
    };
    res.status(200).json(returnUser);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
    console.log("error");
  }
};
