import User from "../../models/user/index.js";
const postUser = async (req, res) => {
    // console.log("User POST request received:", req.body);
    // res.status(200).send("User POST request processed successfully");
    
    // const user = new User(req.body);
    // user.save();
    // res.status(200).send("User POST request processed successfully");

    try {
    const model = await User.create(req.body);
    res.status(201).json({
        message: "User created successfully",
        data: model
    });
    }catch (error) {
        console.error("Error processing user POST request:", error.message);
        res.status(500).send({status: 500, error});
};
};

export default postUser;