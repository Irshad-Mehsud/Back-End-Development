const getLikes = (req, res) => {
    console.log("Likes GET request received");
    res.status(200).send("Likes GET request processed successfully");
}
export default getLikes;