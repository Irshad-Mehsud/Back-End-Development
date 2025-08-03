import User from "../../models/user/index.js";

const getUser = async (req, res) => {
   try {
    const users = await User.find();
     res.status(200).json({
        message: "User get Request successfully",
        data: users
    });
   } catch (error) {
        console.error("Error processing user GET request:", error.message);
        res.status(500).send({status: 500, error});
    }
    
   }
// }

export default getUser;


