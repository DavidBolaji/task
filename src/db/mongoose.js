const mongoose = require("mongoose");
// mongodb+srv://taskdavid:v0gHpFWrP9djnWZe@cluster0.0n3oy.mongodb.net/?retryWrites=true&w=majority

mongoose.connect("mongodb://127.0.0.1:27017/task", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
