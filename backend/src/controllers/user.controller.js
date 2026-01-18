import {User} from "../models/user.model.js";

const registerUser = async (req, res) => { // first task is to see request body, and then give response
    try {
        const {username, email, password} = req.body;

        // basic validation
        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }

        // check if user already exists
        const existing = await User.findOne({ email: email.toLowerCase().trim() });
        if(existing){
            return res.status(400).json({message: "User already exists"})
        }

        // create new user
        const user = await User.create({ // awit is used to wait for the promise to resolve, user successfully created
            username,
            email: email.toLowerCase().trim(),
            password,
            loggedIn: false
        });

        res.status(201).json({message: "User registered successfully",
            user: {id: user._id, username: user.username, email: user.email}
        });
        // This line sends a successful HTTP response back to the client after a user is registered. Here's what each part does:
    } catch (error) {
        res.status(500).json({message: "Internal Server Error", error: error.message});
    }
};

export {registerUser};