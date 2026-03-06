const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 3000;

// Servir les fichiers statiques (index.html, index.js)
app.use(express.static(path.join(__dirname)));
app.use(
  cors({
    origin: "*",
  }),
);

// Route de calcul
app.get("/calculer", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  const op = req.query.op;
  let resultat;

  if (op === "add") resultat = a + b;
  else if (op === "sub") resultat = a - b;
  else if (op === "mul") resultat = a * b;
  else if (op === "div") resultat = b !== 0 ? a / b : "Division par zéro";
  else if (op === "mod") resultat = b !== 0 ? a % b : "Division par zéro";
  else resultat = "Opération inconnue";

  res.json({ resultat });
});

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
