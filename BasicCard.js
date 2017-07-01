function BasicCard(front, back) {
	// Checks if function call is an object instance, if not, recall function as a new object.
	if (!(this instanceof BasicCard)) {
		return new BasicCard(front, back);
	}

	this.front = front;
	this.back = back;
}


module.exports = BasicCard;