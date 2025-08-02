import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    email: {
        type: mongoose.Schema.Types.String,
        required: true,
        unique: true,
    },
    password: {
        type: mongoose.Schema.Types.String,
        required: true,
        minlength: 6,
        maxlength: 12,
    },

},
{ 
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
 });
const User = mongoose.model('users', userSchema);

export default User;

