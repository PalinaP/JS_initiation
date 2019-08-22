const codes = [
  {codon: "UCU", acide_amine: "Sérine"},
  {codon: "UCC", acide_amine: "Sérine"},
  {codon: "UCA", acide_amine: "Sérine"},
  {codon: "UCG", acide_amine: "Sérine"},
  {codon: "AGU", acide_amine: "Sérine"},
  {codon: "AGC", acide_amine: "Sérine"},
  {codon: "CCU", acide_amine: "Proline"},
  {codon: "CCC", acide_amine: "Proline"},
  {codon: "CCA", acide_amine: "Proline"},
  {codon: "CCG", acide_amine: "Proline"},
  {codon: "UUA", acide_amine: "Leucine"},
  {codon: "UUG", acide_amine: "Leucine"},
  {codon: "UUU", acide_amine: "Phénylalanine"},
  {codon: "UUC", acide_amine: "Phénylalanine"},
  {codon: "CGU", acide_amine: "Arginine"},
  {codon: "CGC", acide_amine: "Arginine"},
  {codon: "CGA", acide_amine: "Arginine"},
  {codon: "CGG", acide_amine: "Arginine"},
  {codon: "AGA", acide_amine: "Arginine"},
  {codon: "AGG", acide_amine: "Arginine"},
  {codon: "UAU", acide_amine: "Tyrosine"},
  {codon: "UAC", acide_amine: "Tyrosine"}
];

let lc = codes.length

console.log("Voilà la suite d'acides aminés donnée par la chaîne d'ARN CCGUCGUUGCGCUACAGC:");

let arn1 = "CCGUCGUUGCGCUACAGC";
let l1 = arn1.length

// number of codons containes in ARN string
let numberCodons = Math.floor(l1/3)

let str_acide_amine = ""

// for each codon in ARM get the corresponding acide aminé
for (let i = 0; i < numberCodons*3; i+=3) {
  let codon_x = arn1.slice(i,i+3);
  // boucle on array codes to find acide aminé corresponding to codon_x
  for (let j = 0; j < lc; j++){
    if (codes[j].codon === codon_x){
      str_acide_amine = str_acide_amine + " - "+ codes[j].acide_amine
    }
  }
}

// print result
console.log(str_acide_amine)


console.log("Voilà la suite d'acides aminés donnée par la chaîne d'ARN CCUCGCCGGUACUUCUCG:");

let arn2 = "CCUCGCCGGUACUUCUCG";
let l2 = arn2.length

// number of codons containes in ARN string
let numberCodons2 = Math.floor(l1/3)

let str_acide_amine2 = ""

// for each codon in ARM get the corresponding acide aminé
for (let i = 0; i < numberCodons2*3; i+=3) {
  let codon_x = arn2.slice(i,i+3);
  // boucle on array codes to find acide aminé corresponding to codon_x
  for (let j = 0; j < lc; j++){
    if (codes[j].codon === codon_x){
      str_acide_amine2 = str_acide_amine2 + " - "+ codes[j].acide_amine
    }
  }
}

// print result
console.log(str_acide_amine2)








// com inutile
