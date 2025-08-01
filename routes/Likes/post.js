const postLikes = (req, res) => {
    console.log("Likes POST request received:", req.body);
    res.status(200).send("Likes POST request processed successfully");
}
export default postLikes;