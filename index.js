function calculer(operation) {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);

  fetch(`/calculer?a=${a}&b=${b}&op=${operation}`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("resultat").textContent =
        "Résultat : " + data.resultat;
    })
    .catch(() => {
      document.getElementById("resultat").textContent = "Erreur !";
    });
}
