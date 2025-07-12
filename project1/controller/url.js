import { Url } from "../models/url.js";
import shortid from "shortid";

export const shorturl = async (req,res) => {
const longurl = req.body.longurl;
const shortcode = shortid.generate();

const shorturl = `http://localhost:3000/${shortcode}`;

const newurl = new Url({
    shortcode, longurl
});

await newurl.save();
res.render("index.ejs", {shorturl});
}

export const geturl = async (req,res) => {
    const shortcode = req.params.shortcode;
    const url = await Url.findOne({shortcode});
    res.redirect(url.longurl);
}