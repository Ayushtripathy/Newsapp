const express = require("express");

const app = express();
const port = 5000;

//static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/js", express.static(__dirname + "public/js"));

//Templating engine
app.set("views", "./src/views");
app.set("view engine", "ejs");

//body parsing
app.use(express.urlencoded({ extended: true }));

//Routes
const newsRouter = require("./src/routes/news");
app.use("/", newsRouter);
app.use("/article", newsRouter);


// listen to port
app.listen(port, () => console.log(`Listening on port ${port}`));
