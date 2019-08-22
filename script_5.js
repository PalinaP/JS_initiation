const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

let l = books.length;

// ***************************
// EXO 1 : Est-ce que tous les livres ont été au moins empruntés une fois ?
// ***************************
console.log("1 - Est-ce que tous les livres ont été empruntés au moins une fois ?")

let n = 0
let token = "Oui"

for (let i = 0; i < l; i++) {
  // check if rented = 0 for at least one book
  if (books[i].rented === 0) {
    token = "Non"
    break
  }
}

// print result
console.log(token)


// ***************************
// EXO 2 : Quel est livre le plus emprunté ?
// ***************************

console.log("2 - Quel est livre le plus emprunté ?")

function compare( a, b ) {
  if ( a.rented < b.rented ){
    return -1;
  }
  if ( a.rented > b.rented ){
    return 1;
  }
  return 0;
}

// define a new array so no change are definitively made to array books
let sortedBooks = [];
sortedBooks = books.sort(compare).reverse();

console.log(`Le live le plus emprunté est ${sortedBooks[0].title}`);


// ***************************
// EXO 3 : Quel est le livre le moins emprunté ?
// ***************************

console.log("3 - Quel est livre le moins emprunté ?")

console.log(`Le live le plus emprunté est ${sortedBooks[l-1].title}`);


// ***************************
// EXO 4 : Trouve le livre avec l'ID: 873495
// ***************************

console.log("4 - Quel est livre avec l'id 873495?")

for (let i = 0; i < l; i++) {
  // check if id = 873495 for at least one book
  if (books[i].id === 873495) {
    console.log(`Le livre avec l'id 873495 est ${books[i].title}`)
    break
  }
}


// ***************************
// EXO 5 : Supprime le livre avec l'ID: 133712 ;
// ***************************

// define a new array so no change are definitively made to array books
let supprBooks = books

for (let i = 0; i < l; i++) {
  // search for book with id = 133712 and delete
  if (supprBooks[i].id === 133712) {
    books.splice(i,1)
    break
  }
}

console.log("5 - Le livre avec l'id 133712 a été supprimé du tableau supprBooks")
console.log(supprBooks)


// ***************************
// EXO 6 : Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
// ***************************

function compare( a, b ) {
  if ( a.title < b.title ){
    return -1;
  }
  if ( a.title > b.title ){
    return 1;
  }
  return 0;
}

sortedBooks = books.sort(compare);

console.log(sortedBooks);
