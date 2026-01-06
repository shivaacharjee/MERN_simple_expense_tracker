const express = require("express");
const Expense = require("../models/Expense");

const router = express.Router();

// Add expense
router.post("/", async (req, res) => {
  const expense = await Expense.create(req.body);
  res.json(expense);
});

// Get all expenses
router.get("/", async (req, res) => {
  const expenses = await Expense.find().sort({ date: -1 });
  res.json(expenses);
});

// Delete expense
router.delete("/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;