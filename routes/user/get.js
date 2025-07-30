
const getUser = (req, res) => {
    console.log("User GET request received");
    res.status(200).send("User GET request processed successfully");
}

export default getUser;


