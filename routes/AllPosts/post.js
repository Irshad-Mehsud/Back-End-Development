
const AllPost = (req, res) => {
    console.log("AllPost POST request received:", req.body);
    res.status(200).send("AllPost POST request processed successfully");
}

export default AllPost;