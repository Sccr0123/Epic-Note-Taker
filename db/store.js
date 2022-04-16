const util = require("util");
const fs = require("fs");

class Store {
	getNotes() {
		return this.read().then((notes) => {
			let parsedNotes;
			try {
				parsedNotes = [].concat(JSON.parse(notes));
			} catch (err) {
				parsedNotes = [];
			}
			return parsedNotes;
		});
	}

	saveNotes() {
		return this.read().then((notes) => {
			let parsedNotes;
			try {
				parsedNotes = [].concat(JSON.parse(notes));
			} catch (err) {
				parsedNotes = [];
			}
			return parsedNotes;
		});
	}

	deleteNotes() {
		console.log("");
	}
}

module.exports = Store;
