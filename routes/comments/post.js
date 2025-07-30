const postComments = (req, res) => {
    console.log("Comments POST request received:", req.body);
    res.status(200).send("Comments POST request processed successfully");
}
export default postComments;