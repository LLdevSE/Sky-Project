
import bcrypt from "bcrypt";
import User from "../models/user.js";

export function saveUser(req, res) {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);
    const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: hashedPassword,
        phone: req.body.phone
    })
    user.save().then(
        () => {
            res.json({
                message: "user saved successfully."
            })
        }
    ).catch(
        () => {
            res.status(500).json({
                message: "user not saved."
            })
        }
    )
}

export function loginUser(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({
        email: email
    }).then(
        (user) => {
            if (user == null) {
                res.json({
                    message: "Invalid email."
                })
            } else {
                const isPasswordCorrect = bcrypt.compareSync(password, user.password);
                if (isPasswordCorrect) {
                    res.json({
                        message: "login success."
                    })
                } else {
                    res.status(403).json({
                        message: "invalid password."
                    })
                }
            }
        }
    )
}