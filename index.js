import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Root route
app.get('/', (req, res) => {
  res.send("Hello");
});

// Dynamic color route
app.get('/:color', (req, res) => {
  res.send(req.params.color); // 🔁 Send only color string
});

app.listen(900, () => {
  console.log("Server is running on port 900");
});
