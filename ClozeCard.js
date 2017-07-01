function ClozeCard(text, cloze) {
	// Checks if function call is an object instance, if not, recall function as a new object.
	if (!(this instanceof ClozeCard)) {
		return new ClozeCard(text, cloze);
	}

	this.fullText = text;
	this.cloze = cloze;
	
	let index = text.search(cloze);
	if (index < 0) {
		return console.log("\tSorry, \"" + cloze + "\" doesn't appear in the phrase: \"" + text + "\".  Please try again.");
 	} else {
 		// Creates a new RegExp object with the cloze string and sets the "global" and "ignoreCase" properties.
 		let clozeStr = new RegExp(cloze, "gi");
 		// Searches through "text" variable string for the RegExp object to find all occurrences of the cloze and replace with " ... ".
 		// Sets new string as this objects "partial" property.
 		this.partial = text.replace(clozeStr, " ... ");
 	}
 }


module.exports = ClozeCard;
