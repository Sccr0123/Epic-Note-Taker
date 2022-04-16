const router = require("express").Router();
const store = require("../db/store");

// GET method route
router.get("/notes", (req, res) => {
	store.getNotes()
		.then((notes) => {
			return res.json(notes);
		})
		.catch((err) => res.status(500).json(err));
});

// POST method route
router.post("/", (req, res) => {
	store
		.saveNotes()
		.then((notes) => {
			return res.json(notes);
		})
		.catch((err) => res.status(500).json(err));
});

router.delete("/", (req, res) => {
	store
		.deleteNotes()
		.then((notes) => {
			return res.json(notes);
		})
		.catch((err) => res.status(500).json(err));
});

module.exports = router;
