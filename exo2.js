/**Exercice 6 : Écrivez un programme JavaScript simple pour joindre tous les éléments du tableau suivant
dans une chaîne de caractères.
 * @param {separator} separator
 * @param {arrayEnter} array
 */
let joinCaracteres = function (sign, arrayEnter) {
  let typeSign = ["+", ","];
  let signArray = sign.split("");
  for (const key in sign) {
    if (typeSign.includes(signArray[key])) {
      console.log("Ok");
      alert(
        "Exercie 6 : " +
          "\n Tableau Entrer : " +
          " [ " +
          arrayEnter +
          " ] " +
          "\n Separateur : " +
          sign +
          "\n Chîne de sortie : " +
          arrayEnter.join(`${sign}`)
      );
    } else {
      alert(
        "Erreur de séparateur (les séparateurs prisent en charge : + et ,) "
      );
      break;
    }
  }
};

// let nomber = 1;
// let arrayEnter = [];
// let sign;
// while (nomber < 5) {
//   let caracteres = prompt(`Entre la chaîne ${nomber}  :  `);
//   arrayEnter.push(caracteres);
//   nomber++;
//   if (nomber == 5) {
//     sign = prompt("Entrer le separateur : ");
//     joinCaracteres(sign, arrayEnter);
//     break;
//   }
// }

/**
 * Exercice 7
 * Ecrivez une instruction conditionnelle JavaScript pour trouver le signe du produit de trois
    nombres 
 */
function signProduit() {
  let nomber1 = parseInt(prompt("Entre nombre 1 : "));
  let nomber2 = parseInt(prompt("Entre nombre 2 : "));
  let nomber3 = parseInt(prompt("Entre nombre 3 : "));
  if (
    Number.isInteger(nomber1) == true &&
    Number.isInteger(nomber2) === true &&
    Number.isInteger(nomber3) === true
  ) {
    let resulte = nomber1 * nomber2 * nomber3;
    let sign;

    if (resulte < 0) {
      let signed = resulte.toString();
      sign = signed.split("")[0];
    } else {
      sign = "+";
    }

    alert(
      "Exercie 7 : " +
        "\n Résultat : " +
        "  " +
        resulte +
        "  " +
        "\n Signe : " +
        sign
    );
  } else {
    alert("Oups! entrer simplement les nombres");
  }
}
//signProduit();

/**
 * Exercice 8 : Écrivez une fonction JavaScript pour cloner un tableau
 */
function cloneArray() {
  let arrayEnter = [];
  let condition = true;
  while (condition) {
    let nomber = parseInt(prompt("Entre nombre  : "));
    if (Number.isInteger(nomber) == true) {
      arrayEnter.push(nomber);
      condition = confirm("Voulez-vous continuer ?");
      if (condition == false) {
        if (arrayEnter.length > 0) {
          alert(
            "Exercie 8 : " +
              "\n Chaîne d'origine : " +
              arrayEnter +
              "\n " +
              "Chaîne de copie : " +
              "[" +
              arrayEnter.join(",") +
              "]"
          );
          break;
        } else {
          alert("Exercie 8 : Ours ! il y a pas de value dans le tableau.");
          break;
        }
      }
    } else {
      condition = confirm("Ce n'est pas un nombre voulez-vous continuer ?");
      if (condition == false) {
        break;
      }
    }
  }
}
///cloneArray();
