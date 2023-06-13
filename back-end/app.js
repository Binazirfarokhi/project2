require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json({
  limit: '1000mb'
}));
const UserRouter = require("./routes/user.route");

app.use("/api/users", UserRouter);

app.use(function (req, res) {
  res.sendFile(path.resolve(__dirname, './client/index.html'));
});

mongoose.connect(process.env.MONGODB_URL)
.then(() => {
  console.log("MongoDB connected...");
  app.listen(PORT, () => {
    console.log(`The server set up at port: ${PORT}`);
  })
})