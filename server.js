// --------- Importing necessary modules --------
const express = require("express");
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

// --------- Importing routes --------
const userRoutes = require("./routes/User");

// Loading environment variables from .env file
require('dotenv').config();

// Setting up port number
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// app.use(
// 	cors({
// 	  origin: '*',
// 	  credentials: true,
// 	})
// );


// Setting up routes
app.use("/api/v1/auth", userRoutes);

// Testing the server
app.get("/", (req, res) => {
	return res.json({
		success: true,
		message: "Your server is up and running ...",
	});
});


// Listening to the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

// End of code.

// http://10.0.2.2:4000