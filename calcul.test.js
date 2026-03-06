const request = require("supertest");
const app = require("./server.js");

test("Addition : 2 + 3 = 5", async () => {
  const res = await request(app).get("/calculer?a=2&b=3&op=add");
  expect(res.body.resultat).toBe(5);
});

test("Soustraction : 10 - 4 = 6", async () => {
  const res = await request(app).get("/calculer?a=10&b=4&op=sub");
  expect(res.body.resultat).toBe(6);
});

test("Multiplication : 3 * 4 = 12", async () => {
  const res = await request(app).get("/calculer?a=3&b=4&op=mul");
  expect(res.body.resultat).toBe(12);
});

test("Division : 10 / 2 = 5", async () => {
  const res = await request(app).get("/calculer?a=10&b=2&op=div");
  expect(res.body.resultat).toBe(5);
});

test("Division par zero", async () => {
  const res = await request(app).get("/calculer?a=10&b=0&op=div");
  expect(res.body.resultat).toBe("Division par zero");
});

test("Modulo : 10 % 3 = 1", async () => {
  const res = await request(app).get("/calculer?a=10&b=3&op=mod");
  expect(res.body.resultat).toBe(1);
});

test("Modulo par zero", async () => {
  const res = await request(app).get("/calculer?a=10&b=0&op=mod");
  expect(res.body.resultat).toBe("Division par zero");
});

test("Racine carree : sqrt(9) = 3", async () => {
  const res = await request(app).get("/calculer?a=9&b=0&op=sqrt");
  expect(res.body.resultat).toBe(3);
});

test("Racine carree nombre negatif", async () => {
  const res = await request(app).get("/calculer?a=-4&b=0&op=sqrt");
  expect(res.body.resultat).toBe("Nombre negatif impossible");
});

test("sinus ", async () => {
  const res = await request(app).get("/calculer?a=0&b=0&op=sin");
  expect(res.body.resultat).toBe(0);
});
