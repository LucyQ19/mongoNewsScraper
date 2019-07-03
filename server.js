const express = require("express");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars"), exphbs({ defaultLayout: "main "});

app.set("view engine", "handlebars");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}!`);
});