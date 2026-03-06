// test/calculatrice.test.js

function calculer(a, b, op) {
  if (op === "add") return a + b;
  if (op === "sub") return a - b;
  if (op === "mul") return a * b;
  if (op === "div") return b !== 0 ? a / b : "Division par zéro";
  return "Opération inconnue";
}

test("Addition : 2 + 3 = 5", () => {
  expect(calculer(2, 3, "add")).toBe(5);
});

test("Soustraction : 10 - 4 = 6", () => {
  expect(calculer(10, 4, "sub")).toBe(6);
});

test("Multiplication : 3 * 4 = 12", () => {
  expect(calculer(3, 4, "mul")).toBe(12);
});

test("Division : 10 / 2 = 5", () => {
  expect(calculer(10, 2, "div")).toBe(5);
});

test("Division par zéro", () => {
  expect(calculer(10, 0, "div")).toBe("Division par zéro");
});
