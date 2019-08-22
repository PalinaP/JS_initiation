const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

let l = entrepreneurs.length;

// ***************************
// EXO 1 : Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70 ;
// ***************************

// Un prompt s'affiche avec la question suivante
let birthYearU = prompt("Salut, tu veux la liste des entrepreneurs qui sont nés en quelle année (donne une année entre 1901 et 1990)?");

let token = "n";

// loop on entrepreneurs array
for (let i = 0; i < l; i++) {
  // check if year required by user exists in entrepreneurs array
  if (entrepreneurs[i].year == birthYearU) {
    let fullname = entrepreneurs[i].first + " " + entrepreneurs[i].last;
    console.log(`${fullname} est né en ${birthYearU}`);
    token = "y";
  }
}

// if no entrepreneur found print message
if (token === "n"){
  console.log(`Aucun entrepreneur n'est né en ${birthYearU}`);
}


// ***************************
// EXO 2: Sors une array qui contient le prénom et le nom des entrepreneurs ;
// ***************************

let entrepreneursName = [];

// loop on entrepreneurs array
for (let i = 0; i < l; i++) {
  let fullname = entrepreneurs[i].first + " " + entrepreneurs[i].last;
  entrepreneursName.push(fullname);
}

console.log("Voici l'array avec le nom des entrepreneurs:");
console.log(entrepreneursName);


// ***************************
// EXO 3 : Quel âge aurait chaque inventeur aujourd'hui ?
// ***************************

// get current year
let today = new Date();
let yyyy = today.getFullYear();

// loop on entrepreneurs array
for (let i = 0; i < l; i++) {
  // get entrepreneur fullname
  let fullname = entrepreneurs[i].first + " " + entrepreneurs[i].last;
  // get current age
  let age = yyyy - entrepreneurs[i].year
  // print result
  console.log(`${fullname} aurait ${age} ans aujourd'hui`);
}


// ***************************
// EXO 3 : Trie les entrepreneurs par ordre alphabétique du nom de famille.
// ***************************

function compare( a, b ) {
  if ( a.last < b.last ){
    return -1;
  }
  if ( a.last > b.last ){
    return 1;
  }
  return 0;
}

let sortedEntrepreneurs = [];

sortedEntrepreneurs = entrepreneurs.sort(compare);

console.log(sortedEntrepreneurs);













// com inutile
