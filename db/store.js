const util = require("util");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
	read() {
		return readFileAsync("db/db.json", "UTF8");
	}

	write(notes) {
		return writeFileAsync("db/db.json", JSON.stringify(notes));
	}

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

	saveNotes(note) {
		//Creates var for title, text, and id
		const { title, text } = note;
		let id = uuidv4();

		//Creates note Object
		const newNote = {
			id: id,
			title: title,
			text: text,
		};

		return this.getNotes()
			.then((notes) => {
				return [...notes, newNote];
			})
			.then((notes) => {
				return this.write(notes);
			});
	}

	deleteNotes(delID) {
		return this.getNotes().then((notes) => {
			var removeItem = notes.find(({ id }) => {
				return id === delID;
			});
			const index = notes.findIndex(({ id }) => id === removeItem.id);
			notes.splice(index, 1);

			return this.write(notes);
		});
	}
}

module.exports = new Store();
