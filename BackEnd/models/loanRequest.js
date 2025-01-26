const mongoose = require("mongoose");

const LoanRequestSchema = new mongoose.Schema({
  userId: String,
  loanType: String,
  amount: Number,
  purpose: String,
  status: { type: String, default: "Pending" },
});

module.exports = mongoose.model("LoanRequest", LoanRequestSchema);
