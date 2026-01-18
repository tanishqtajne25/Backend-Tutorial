import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,         // Remove whitespace lil  y == lily
            minLength: 1,
            maxLength: 30

        },

        password: {
            type: String,
            required: true,
            minLength: 6,
            maxLength: 50
        },

        email: {
            type: String,
            lowercase: true,
            trim: true,         // Remove whitespace lil  y == lily
            minLength: 1,
            maxLength: 30
        }
    },

    {
        timestamps: true
    }
)

// before saving any password, Hash it
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10); // 10 is the salt rounds for hashing the password 

    next(); // proceed to save the user 
});

// method to compare password
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

export const User = mongoose.model("User", userSchema)