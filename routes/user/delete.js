import User from "../../models/user/index.js";

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
        data: null
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
      data: deletedUser // optional: returns deleted user info
    });
  } catch (error) {
    console.log("🛑 Delete user error:", error); // 🔍 Full error object
    console.error("Error message:", error.message); // Short message for logs

    res.status(500).json({
      status: 500,
      error: error.message
    });
  }
};

export default deleteUser;
