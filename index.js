require("dotenv").config();
require("./server/config/mysql.conf");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const userRoutes = require("./server/routes/users.routes");
const settingsRoutes = require("./server/routes/settings.routes");

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/settings", settingsRoutes);

app.use(express.static(__dirname + "/build"));

app.get("*", (req, res) => {
  return res.sendFile("/build/index.html", { root: __dirname + "/" });
});

app.listen(PORT, () => console.log("You're talking to the database"));
