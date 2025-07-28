import express from 'express';
const app= express();
const PORT = 3000;
// Middleware to parse JSON request bodies
// This allows us to access req.body in our routes
app.use(express.json())
const users =[];
// Get all users
app.get("/users",(req,res)=>{
  res.send(users)
})
//create a new user using post method
// The user data should be in the request body

app.post("/users",(req,res)=>{
  console.log(req.body);
  users.push({...req.body, id: (new Date()).getTime().toString(36)});
  res.send("User added successfully");

})
// Get a user by ID
// The ID should be passed as a URL parameter
// Example: /users/12345
// The user data should be in the request body
// Delete a user by ID using delete method
app.delete("/users/:id",(req,res)=>{
const {id} = req.params;
console.log(id,"ID to delete");
const index = users.findIndex((user)=>user.id ===id);
console.log(index,"Index to delete");
users.splice(index,1);
res.send("User deleted successfully");
// res.send(index);
})
// =======================================
// Update a user by ID using put method
// The ID should be passed as a URL parameter
// The user data should be in the request body

app.put("/users/:id",(req,res)=>{
const {id} = req.params;
const index = users.findIndex((user)=>user.id ===id);
users.splice(index,1,{...req.body, id});
res.send("User updated successfully");
});


app.get("/",(req,res)=>{{
  res.send(users);
}})

// Listen to the server on the specified port
// You can use the command `npm run dev` to start the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})