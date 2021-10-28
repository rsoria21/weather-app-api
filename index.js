const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { static } = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

// rate limit 10 min
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000,
//   max: 5,
// });
// app.use(limiter);
// app.set("trust proxy", 1);

// static folder
app.use(express.static("public"));

// Routes
app.use("/api", require("./routes"));

// This enables cors

app.use(cors());

// app.listen(PORT, () => console.log("Server running on port ${PORT}"));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
