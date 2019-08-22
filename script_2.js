// Un prompt s'affiche avec la question suivante
let numberU = prompt("De quel nombre veut tu calculer la factorielle ?");

// fonction factorielle
function factor(number) {
  let factorResult = 1
  for(let count = number; count > 0; count--){
    factorResult = factorResult * count;
  }
  return factorResult
}

// Dans la console le résultat suivant est affiché
console.log(factor(numberU));
