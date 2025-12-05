const express = require("express");
const router = express.Router();
const controller = require("../controllers/requestController");

// Routes
router.post("/request/send", controller.sendRequest);
router.get("/history", controller.getHistory);
router.get("/history/:id", controller.getSingleHistory);
router.delete("/history/:id", controller.deleteSingleHistory);
router.delete("/history", controller.clearAllHistory);

module.exports = router;
