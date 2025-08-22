const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

const transactions = [];

app.get("/transactions", (req, res) => {
  res.send({ transactions });
});

app.post("/transactions", (req, res) => {
  const transaction = {
    description: req.body.description,
    amount: req.body.amount,
  };
  transactions.push(transaction);
  res.json(transaction);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
