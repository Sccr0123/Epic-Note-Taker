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
        console.log("")
    }

    deleteNotes() {
        console.log("");
    }

};
