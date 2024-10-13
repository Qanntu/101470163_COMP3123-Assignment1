require('dotenv').config(); 

const express = require("express")
const employeesRoutes = require("./routes/employees")
const usersRoutes = require("./routes/users");
const mongoose = require ("mongoose")
const dotenv = require("dotenv");

dotenv.config();


//const DB_CONNECTION_STRING = "mongodb://localhost:27017/employees"
//const DB_CONNECTION_STRING = "mongodb://localhost:27017/routes"
const DB_CONNECTION_STRING = "mongodb+srv://lizzarbsch:niRzLhrydIII1PBV@cluster0.zpjpx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB_CONNECTION_STRING)
    .then(() => {
        console.log("Connected to MongoDB");
    }).catch((err) => {
        console.log("Error: ", err);
    });


const app = express()
const SERVER_PORT = 3001

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get("/", (req, res) => {
    res.send("<h1>MongoDB + Mongoose Example</h1>");
});

app.use("/api/v1/employees", employeesRoutes);
app.use("/api/v1/users", usersRoutes);



    //start server
app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
});
