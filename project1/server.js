import express from "express";
import mongoose from "mongoose";
import { shorturl,geturl } from "./controller/url.js";

const app = express();

app.use(express.urlencoded({extended : true}));
// app.set("view engine", "ejs");

mongoose.connect(
    "mongodb+srv://chandrabhan8708295629:nXPwfZRKRZAJZAjm@cluster0.rf251kl.mongodb.net/",
    {
        dbName : "project1",
    }
)
.then(() => {
    console.log("database is connected");
})
.catch((err) => {
    console.log(err);
});

//rendering the ejs file
app.get("/", (req, res) => {
    res.render("index.ejs",{shorturl : null});
});

//shorting url logic
app.post("/shorturl", shorturl);

//redirecting to original url using short code dynamic routing
app.get("/:shortcode", geturl);


app.listen(3000, () => {
    console.log("server is listening on port 3000");
});