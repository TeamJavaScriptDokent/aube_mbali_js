/**
 * Exercice 1
 * @param {nomber} string
 */
function renverseNomber(nomber) {
  /**
   * split() : transform a string in array
   * reverse() : reverse a the elements of an array
   * join() : join do join the elements
   */
  let result = nomber.split("").reverse().join("");

  alert("Exercie 1 " + " Entrer : " + nomber + ", " + " Sortie : " + result);
}

//let nomber = prompt("Exercie 1 : Entre le nombre ou chaine ");
//renverseNomber(nomber);

/**
 * Exercice 2
 * "abcdefghijklmnopqrstuvwxyz"
 * @param {chaine} string c'est fonction reçoit une chaine de caracteres
 */
let alphabets = function (chaine) {
  /**
   * sort() : permet de try de façon alphabetique un tableau
   */

  let alp = "abcdefghijklmnopqrstuvwxyz".split("");
  let ch = chaine.split("");
  let i = true;
  for (const key in ch) {
    if (alp.includes(ch[key])) {
      i = true;
    } else {
      i = false;
      alert("Oups entrer les lettres alphabetique");
      break;
    }
  }

  if (i) {
    let result = chaine.split("").reverse().sort().join("");
    alert("Exercie 2 " + " Entrer : " + chaine + ", " + " Sortie : " + result);
  }
};

let chaineAlpha = prompt("Entre la chaine ");
alphabets(chaineAlpha);

/**
 * Exercice 3
 * @param {characters } string c'est fonction reçoit une chaine de caracteres
 */
function vowelCount(characters) {
  let transform = characters.toLowerCase();
  let arrayEnter = transform.split("");

  let vowel = ["a", "e", "i", "o", "u", "y"];

  let nomber = 0;

  for (let key in arrayEnter) {
    if (vowel.includes(arrayEnter[key])) {
      nomber += 1;
    }
  }

  alert(
    "Exercie 3 , " +
      " Entrer : " +
      characters +
      ", " +
      " " +
      "Nombre de voyelle : " +
      " " +
      nomber
  );
}

//let chaine = prompt("Exercie 3 : Entre la chaine ");
//vowelCount(chaine);

/**
 * Exercice 4
 * @param {characters } string c'est une fonction reçoit une chaine de caracteres
 */
function toUpperCaseType(characters) {
  let chained = characters.split(" ");
  let chaine = [];

  for (const key in chained) {
    let value = chained[key].split("");
    value[0] = value[0].toUpperCase();
    chaine += " " + value.join("");
  }

  alert(
    "Exercie 4 " + " Entrer : " + characters + ", " + " Resultat : " + chaine
  );
}
//let chaine2 = prompt("Entre la chaine ");
//toUpperCaseType("le renard brun");

/**
 * Exercice 5
 * @param {nomber1 } int c'est fonction reçoit une chaine de caracteres
 * @param {nombre2 } int c'est fonction reç
 */
function multiplication(nomber1, nombre2) {
  alert(
    "Exercie 5 : " +
      nomber1 +
      " * " +
      nombre2 +
      ", " +
      " Resultat : " +
      nomber1 * nombre2
  );
}
function division(nomber1, nombre2) {
  if (nomber1 < nomber2) {
    alert("Oups ! Le nombre 1 est inférieur au nombre 2");
  } else {
    alert(
      "Exercie 5 : " +
        nomber1 +
        " / " +
        nombre2 +
        ", " +
        " Resultat : " +
        nomber1 / nombre2
    );
  }
}

// let nomber1;
// let nomber2;
// let choix = parseInt(
//   prompt("Choisir le type d'opération : \n 1 - Multiplication \n 2 - Division")
// );
// if (choix) {
//   nomber1 = parseInt(prompt("Entre le nombre 1 : "));
//   nomber2 = parseInt(prompt("Entre le nombre 2 : "));
// }

// switch (choix) {
//   case 1:
//     multiplication(nomber1, nomber2);
//     break;

//   case 2:
//     division(nomber1, nomber2);
//     break;
//   default:
//     alert("Oups ! Fin du nombre");
//     break;
// }
