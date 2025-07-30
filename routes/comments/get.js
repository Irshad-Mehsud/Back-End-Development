const getComments = (req, res) => {
    console.log("Comments GET request received");
    res.status(200).send("Comments GET request processed successfully");
}
export default getComments;