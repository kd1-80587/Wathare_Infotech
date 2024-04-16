require("./config/database");
const router = require("./routes/route")
const express = require('express');
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/data",router)
app.listen(5000, () => console.log(`Server is running on port 5000`));

