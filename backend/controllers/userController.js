import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();

export function saveUser(req, res) {
  if (req.body.role == "admin") {
    if (req.user == null) {
      res.status(403).json({
        message: "login as admin to create accounts.",
      });
      return;
    }

    if (req.user.role != "admin") {
      res.status(403).json({
        message: "you are no authorized to create account.",
      });
    }
  }

  const hashedPassword = bcrypt.hashSync(req.body.password, 10);
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: hashedPassword,
    role: req.body.role,
  });

  user
    .save()
    .then(() => {
      res.status(201).json({
        message: "User created successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "User creation failed",
      });
    });
}

export function loginUser(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({
    email: email,
  }).then((user) => {
    if (user == null) {
      res.status(400).json({
        message: "invalid email",
      });
    } else {
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);
      if (isPasswordCorrect) {
        const userData = {
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
          phone: user.phone,
          isDisabled: user.isDisabled,
          isEmailVerified: user.isEmailVerified,
        };

        console.log(userData);

        const token = jwt.sign(userData, process.env.JWT_KEY);

        res.status(200).json({
          message: "login successful",
          token: token,
          user: userData,
        });
      } else {
        res.status(400).json({
          message: "invalid password",
        });
      }
    }
  });
}
