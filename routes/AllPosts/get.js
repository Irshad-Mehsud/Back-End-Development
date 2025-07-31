
const getAllPosts = (req, res) => {
    console.log("AllPost GET request received");
    res.status(200).send("AllPost GET request processed successfully");
}

export default getAllPosts;


