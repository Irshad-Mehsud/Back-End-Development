import User from "../../models/user/index.js";

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,            // ✅ Return the updated document
      runValidators: true,  // ✅ Ensure schema validation is applied
    });

    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        data: null,
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });

  } catch (error) {
    console.error("Error updating user:", error.message);
    res.status(500).json({
      status: 500,
      error: error.message,
    });
  }
};

export default updateUser;
