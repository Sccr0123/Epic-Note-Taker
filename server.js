const express = require("express");
const apiRoutes = require("./routes/apiroutes");
//const HTMLroutes = require("./routes/htmlroutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use("/api", apiRoutes);

// app.use("/", HTMLroutes);

app.listen(PORT, (err) => {
    console.log(`Listening on ${PORT}`);
})