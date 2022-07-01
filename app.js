const express = require("express");
const app = express();
const taskRoute = require("./src/routes/taskRoute");
const port = 5000;

app.use(express.json());
app.use(taskRoute);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
