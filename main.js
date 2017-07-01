var BasicCard = require('./BasicCard.js');
var ClozeCard = require('./ClozeCard.js');

// BasicCard instance test
var firstPresident = BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log("\nBasic test -->");

// // "Who was the first president of the United States?"
console.log("\tBasicCard.front: " + firstPresident.front); 

// // "George Washington"
console.log("\tBasicCard.back: " + firstPresident.back + "\n"); 

// ClozeCard instance test
var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log("Cloze single-instance test -->");

//"George Washington"
console.log("\tClozeCard.cloze: " + firstPresidentCloze.cloze); 

//" ... was the first president of the United States.
console.log("\tClozeCard.partial: " + firstPresidentCloze.partial);

//"George Washington was the first president of the United States.
console.log("\tClozeCard.fullText: " + firstPresidentCloze.fullText + "\n");

//Multi-instance Cloze Test
var appleCloze = ClozeCard("Steve Jobs was fired from Apple, founded Pixar Studios, then was later rehired by Apple", "Apple");

console.log("Cloze multi-instance test -->");

//"Apple"
console.log("\tClozeCard.cloze: " + appleCloze.cloze);

//"Steve Jobs was fired from ... , founded Pixar Studios, then was later rehired by ... "
console.log("\tClozeCard.partial: " + appleCloze.partial);

//"Steve Jobs was fired from Apple, founded Pixar Studios, then was later rehired by Apple"
console.log("\tClozeCard.fullText: " + appleCloze.fullText + "\n");

console.log("Cloze not found in fullText test -->");

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = ClozeCard("This doesn't work", "oops");
console.log("\n");
