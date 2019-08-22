// Un prompt s'affiche avec la question suivante
let numberU = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

console.log(`Voici une pyramide de ${numberU} étages`)

// construction de la pyramide de numberU étages
for(let count = 1; count <= numberU; count++){
  let a = ""
  let b = ""

  // construction d'un étage
  for(let n = 1; n <= numberU - count; n++){
    a = a + " "
  }
  for(let n = 1; n <= count; n++){
    b = b + "#"
  }
  let etage = a + b
  // affichage d'un étage
  console.log(etage)

}
