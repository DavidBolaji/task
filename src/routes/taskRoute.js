const express = require("express");
const router = new express.Router();
const taskController = require("../controller/taskController");

router.get("/v1/tasks", taskController.getAll);
router.post("/v1/tasks", taskController.create);
router.get("/v1/tasks/:id", taskController.getOne);
router.delete("/v1/tasks/:id", taskController.deleteOne);
router.put("/v1/tasks/:id", taskController.updateOne);
router.post("/v1/tasks/:id", taskController.addMultiple);
router.delete("/v1/tasks", taskController.deleteMultiple);

module.exports = router;
