import User from "../../models/user/index.js";
import bcrypt from "bcrypt";

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }); // changed from find() to findOne()

    if (user) {
      const checkedPassword = bcrypt.compareSync(password, user.password);

      if (checkedPassword) {
        res.status(200).json({
          message: "User login successful",
          data: user
        });
      } else {
        res.status(401).json({
          message: "Invalid email or password",
        });
      }
    } else {
      res.status(404).json({
        message: "User not found",
      });
    }

  } catch (error) {
    console.error("Error processing user login request:", error.message);
    res.status(500).send({
      status: 500,
      error: error.message
    });
  }
};

export default loginUser;
