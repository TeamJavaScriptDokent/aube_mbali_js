let condition = true;
let prenoms = [];

let afficher = function (prenoms) {
  if (prenoms.length > 0) {
    alert("Vos differents prénoms sont : " + prenoms.join(" "));
  } else {
    alert("Aucun prénom n'existe dans le tableau");
  }
};

while (condition) {
  let prenom = prompt("Entrer votre prénom : ");

  if (prenom != "") {
    prenoms.push(" " + prenom);
  } else {
    alert("Aucun prénom");
  }

  condition = confirm("Voulez-vous continuer ? ");

  if (condition === false) {
    afficher(prenoms);
    break;
  }
}
