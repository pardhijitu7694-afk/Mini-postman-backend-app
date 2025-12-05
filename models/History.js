const mongoose = require("mongoose");

const HistorySchema = new mongoose.Schema({
  method: { type: String, default: "GET" },
  url: { type: String, default: null },
  headers: { type: Object, default: null },
  body: { type: Object, default: null },
  responseStatus: { type: Number, default: null },
  responseTime: { type: Number, default: null },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("History", HistorySchema);
