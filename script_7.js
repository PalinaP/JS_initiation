
// Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
// Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
// Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
// Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
// Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;

let userEntry = prompt("Hello, envie de discuter?");

let lu = userEntry.length

// test if last character is "?"
if (userEntry[lu-1] === "?"){
  console.log("Ouais ouais..")
}
else if (userEntry === userEntry.toUpperCase() && userEntry.replace(/\s/g, '').length) {
  console.log("Eh oh, du calme!")
}
else if (userEntry.includes("Fortnite") || userEntry.includes("fortnite") ) {
  console.log("Soum soum?")
}

else if (!userEntry.replace(/\s/g, '').length) {
  console.log("Y'a plus personne?")
}

else {
  console.log("Balek.")
}
