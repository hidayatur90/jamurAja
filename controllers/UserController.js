// Import
const User = require("../models/user");

// Show all users
exports.showUsers = async(req, res) => {
    try {
        const users = await User.findAll();
        return res.status(200).json({
            users,
            message: 'Success to get all data users!'
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Server Error!'
        });
    }
}