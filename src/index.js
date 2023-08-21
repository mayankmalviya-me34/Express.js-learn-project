const express = require("express");
const path = require("path");
const index = express();
const port = 3007;

const StaticPath = path.join(__dirname, "../public" )


// to set the view engine
index.set('view engine', "hbs");

//index.use(express.static(StaticPath));

//template engine root
index.get("", (req, res) => {
    res.render("index", {
        profile : "Mayank Malviya",
    });
});

index.get("/", (req, res) => {
    res.send("Hello Mayank");
});

index.listen(port, () => {
    console.log("Listning port is ${port}");
});