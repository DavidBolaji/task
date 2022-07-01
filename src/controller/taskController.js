const Task = require("../model/taskModel");

exports.create = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();

    res.status(201).send({ id: task._id });
  } catch (e) {
    res.status(500).send({ e: "unable to create" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).send({ tasks });
  } catch (e) {
    res.status(500).send({ e: "unable to get" });
  }
};

exports.getOne = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.find({ _id: id });
    if (!task) {
      res.status(400).send({ error: "There is no task at the id" });
    }
    res.status(200).send({ task });
  } catch (e) {
    res.status(500).send({ e: "unable to get" });
  }
};

exports.deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOneAndDelete({ _id: id });

    res.status(204).send({ task });
  } catch (e) {
    res.status(500).send({ e: "unable to delete" });
  }
};

exports.updateOne = async (req, res) => {
  const { id } = req.params;

  try {
    const tasks = await Task.find({ _id: id });

    console.log(req.body);

    const tasksObjs = Object.keys(req.body);

    console.log(tasksObjs);

    const allowedArr = ["title", "completed"];

    const isValid = tasksObjs.every((task) => allowedArr.includes(task));

    if (!isValid) {
      res.status(400).send({ error: "invalid update" });
    }
    // console.log(tasks);
    tasksObjs.forEach((task) => {
      tasks[0][task] = req.body[task];
    });

    await tasks[0].save();
    res.status(204).send({ task });
  } catch (e) {
    res.status(500).send({ e: "unable to create" });
  }
};

exports.addMultiple = async (req, res) => {
  try {
    const task = await Task.insertMany(req.body.tasks);
    res.status(201).send({ task });
  } catch (e) {
    res.status(500).send({ e: "unable to create" });
  }
};

exports.deleteMultiple = async (req, res) => {
  try {
    const task = await Task.deleteMany({
      _id: {
        $eq: req.body.tasks,
      },
    });

    res.status(204).send(task);
  } catch (e) {
    res.status(500).send({ e: "unable to create" });
  }
};
