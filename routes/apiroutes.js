const router = require("express").Router();
const Store = require("../db/store");

// GET method route
router.get("/notes", (req, res) => {
	Store.getNotes()
		.then((notes) => {
			return res.json(notes);
		})
		.catch((err) => res.status(500).json(err));
});

// POST method route
router.post("/notes", (req, res) => {
	Store.saveNotes(req.body)
		.then((notes) => {
			return res.json(notes);
		})
		.catch((err) => res.status(500).json(err));
});

router.delete("/notes/:id", (req, res) => {
	Store.deleteNotes(req.params.id)
		.then((notes) => {
			return res.json(notes);
		})
		.catch((err) => res.status(500).json(err));
});

module.exports = router;
