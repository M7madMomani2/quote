"use strict";

// Requires =====================================================
require("dotenv").config();
const express = require("express");
const superagent = require("superagent");
// const pg = require("pg");
const cors = require("cors");
const methodOverride = require("method-override");

// const sweetalert = require('sweetalert');

//Middleware =====================================================
const app = express();
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static("img"));
app.use(express.static("public"));
app.use(express.static("js"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
// const DATABASE_URL = process.env.DATABASE_URL;
// const client = new pg.Client(DATABASE_URL);
const PORT = process.env.PORT || 3001;
// const router = express.Router();
// app.use(methodOverride('_method'));

//Handel Routes ==================================================
app.get("/", handleHome);
app.get("/favorite", handleFav);
app.get("/search", handleSearch);
app.post("/addlike", handleLike);
app.get("/quote", handleQuotes);
app.delete("/quote", deleteQuoti);

app.use("*", (request, response) =>
  response.status(404).send("This route does not exist")
);

//Port listener ===================================================
app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});

//Routes Functions =================================================
// Home Function
function handleHome(req, res) {
  res.render("index");
}

// search Function
function handleSearch(req, res) {
  // const countNum = req.query.search[1];
  // const value = req.query.search;
  // const type = req.query.searchType;
  // const url = `https://goquotes-api.herokuapp.com/api/v1/random/${countNum}?type=${type}&val=${value}`;

  const url = `https://dummyjson.com/quotes/random`;

  superagent
    .get(url)
    .then((apiResponse) => {
      if (apiResponse.status === 200) {
        return apiResponse.body.quotes.map((quote) => new Quote(quote));
      } else {
        let arr = [
          { quote: "Try another one  ", author: "Devloper", liked: false },
        ];
        return arr;
      }
    })
    .then((resultObjects) =>
      res.render("searches", { allQuotes: resultObjects })
    )
    .catch((error) => {
      res.send(`Something Went Wrong 1 ${error}`);
    });
}

// qoutes  function
function handleQuotes(req, res) {
  const url = `https://dummyjson.com/quotes`;
  superagent
    .get(url)
    .then((apiResponse) => {
      apiResponse.body.quotes.map((quote) => new Quote(quote));
      res.render("quote", { allQuotes: apiResponse.body.quotes });
    })

    .catch((error) => {
      res.send(`Something Went Wrong ${error}`);
    });
}

// Constructor Functions ============================================
function Quote(data) {
  this.quote = data.text;
  this.author = data.author;
  this.liked = false;
}

// Favorite Function ================================================
function handleFav(req, res) {
  const url = `https://dummyjson.com/quotes/random/10`;
  superagent
    .get(url)
    .then((apiResponse) => {
      console.log(apiResponse.body);
      console.log("apiResponse");
      apiResponse.body.map((quote) => new Quote(quote));
      res.render("favorite", { quotes: apiResponse.body });
    })
    .catch((error) => {
      res.send(`Something Went Wrong ${error}`);
    });
}

// Like Function ================================================
function handleLike(req, res) {
  const url = `https://dummyjson.com/quotes/random`;
  superagent
    .get(url)
    .then((apiResponse) =>
      apiResponse.body.quotes.map((quote) => new Quote(quote))
    )
    .catch((error) => {
      res.send(`Something Went Wrong ${error}`);
    });
}
// Delete Function ================================================
function deleteQuoti(req, res) {
  let id = req.body.id;
  let SQL = "DELETE FROM quotes WHERE id=$1";
  client.query(SQL, [id]).then((result) => {
    res.redirect("/favorite");
  });
}
//Error function =====================================================
function error(err) {
  return `Oops! Something Went Wrong ${err}`;
}
