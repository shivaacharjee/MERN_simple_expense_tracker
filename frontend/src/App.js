import { useEffect, useState } from "react";
import { api } from "./api";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [date, setDate] = useState("");

  const loadExpenses = async () => {
    const res = await api.get("/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  const addExpense = async () => {
    if (!title || !amount || !date) {
      alert("Please fill all fields");
      return;
    }

    await api.post("/expenses", {
      title,
      amount: Number(amount),
      category,
      date,
    });

    setTitle("");
    setAmount("");
    setCategory("Food");
    setDate("");
    loadExpenses();
  };

  const deleteExpense = async (id) => {
    await api.delete(`/expenses/${id}`);
    loadExpenses();
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.heading}>💰 Personal Expense Tracker</h2>

        {/* Form */}
        <div style={styles.form}>
          <input
            style={styles.input}
            placeholder="Expense title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            style={styles.input}
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <select
            style={styles.input}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>Food</option>
            <option>Transport</option>
            <option>Shopping</option>
            <option>Bills</option>
            <option>Other</option>
          </select>

          <input
            style={styles.input}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <button style={styles.addButton} onClick={addExpense}>
            Add Expense
          </button>
        </div>

        {/* Summary */}
        <div style={styles.summary}>
          Total This Month: ₹{total}
        </div>

        {/* List */}
        <ul style={styles.list}>
          {expenses.map((e) => (
            <li key={e._id} style={styles.item}>
              <div>
                <strong>{e.title}</strong>
                <div style={styles.meta}>
                  {e.category} • {new Date(e.date).toLocaleDateString()}
                </div>
              </div>

              <div style={styles.right}>
                <span style={styles.amount}>₹{e.amount}</span>
                <button
                  style={styles.deleteButton}
                  onClick={() => deleteExpense(e._id)}
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f4f6f8",
    padding: "40px",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    maxWidth: "650px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "grid",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px",
    backgroundColor: "#1976d2",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  summary: {
    backgroundColor: "#e3f2fd",
    padding: "12px",
    borderRadius: "4px",
    marginBottom: "15px",
    fontWeight: "bold",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #eee",
  },
  meta: {
    fontSize: "12px",
    color: "#666",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  amount: {
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#e53935",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    width: "26px",
    height: "26px",
    cursor: "pointer",
  },
};

export default App;
