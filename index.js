const http = require("http");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const taskControllers = require("./controller/taskController");

dotenv.config();

const {display,getDetails}= require("./student");
display();
getDetails();

// const student= require("./student");
// student.display();
// student.getDetails();


console.log("hello world");
console.log("welcome");

// const server = http.createServer((req, res) => {
//     res.writeHead(200,{"Content-Type":"text/plain"});
//     res.end("hi world");
// });

const app = express();
app.use(express.json());

app.post("/tasks", taskControllers.createTask);
app.get("/tasks", taskControllers.getTasks);
app.get("/tasks/:id", taskControllers.getTasksById);
app.patch("/tasks/:id", taskControllers.updateTask);
app.delete("/tasks/:id", taskControllers.deleteTask);

app.get("/:id",(req,res) => {
    res.status(200).json({
        message: "hello",
        id: req.params.id
    });
});



app.post("/:id", (req,res) =>{
    res.status(200).json(req.body);
});

app.listen(process.env.PORT, () => {
    console.log("server is running on ",process.env.PORT);
})

// server.listen(process.env.PORT,() => {
//     console.log("server is running on ",process.env.PORT);
// });

mongoose.connect("mongodb+srv://cheryllalparakal:cheryl@cluster0.0awcfnl.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("db connected")
}).catch((err) => {
    console.log(err);
});

