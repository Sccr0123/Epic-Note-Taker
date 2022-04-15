const router = require("express").Router();
const store = require("../db/store");

// GET method route
router.get("/notes", (req, res) => {
    store.getNotes().then((notes) => {
        return res.json(notes);
    }).catch((err) => res.status(500).json(err));
})

// POST method route
router.post("/", (req, res) => {
    res.send('POST request to the homepage')
})

router.delete("/", (req, res) => {
	res.send("POST request to the homepage");
});

module.exports = router;