require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require('./routes/authRoutes');

const App = express();
App.use(express.json());
App.use(cors("http://localhost:2000")); // Adjust your frontend URL here

App.use('/auth', authRoute);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        App.listen(2000, () => {
            console.log("Database connected and server is running on port 2000");
        });
    })
    .catch((error) => {
        console.error("Database'connection error:", error);
    });

// Global error handler
App.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});
module.exports = App;


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const register = require('./routes/auth')
// const loanRequest=require('./routes/auth')
// const login = require("./routes/auth")
// const app = express();
// app.use(express.json());
// app.use(cors());

// // app.use("auth"/)

// // MongoDB connection
// mongoose
//   .connect(process.env.MONGO_URI)
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.error(err));



// // Start server
// const PORT = process.env.PORT || 2000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
