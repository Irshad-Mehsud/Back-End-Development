
const postUser = (req, res) => {
    console.log("User POST request received:", req.body);
    res.status(200).send("User POST request processed successfully");
}

export default postUser;