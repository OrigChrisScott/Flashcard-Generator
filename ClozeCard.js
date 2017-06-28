function ClozeCard(text, cloze) {
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}

	let index = text.search(cloze);
	if (index < 0) {
		return console.log("Sorry, \"" + cloze + "\" doesn't appear in the phrase: \"" + text + "\".  Please try again.");
 	} else {
 		let firstPart = text.slice(0, index);
 		let lastPart = text.slice(index + cloze.length, text.length);
 		let partialString = firstPart + "..." + lastPart;
 		this.partial = partialString;
 	}

 	this.fullText = text;
	this.cloze = cloze;

}

module.exports = ClozeCard;