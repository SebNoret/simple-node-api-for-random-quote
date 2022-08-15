const express = require("express");
const data = require("./data.json")


const app = express();

//middleware to bypass CORS restriction
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//returns a random quote from data.json
app.get("/random", (req, res, next) => {

    // generate a random number to select a random quote
    const indexLength = data.citation.length
    const citationId = Math.floor(Math.random() * indexLength) + 1;

    const selectRandomQuote = data.citation[citationId]
    console.log(citationId)
    res.status(200).json({

        quote: selectRandomQuote,
        index: citationId
    })
})


//handles 404 error for unavailable route
app.use(function (req, res, next) {
    res.status(404).send({
        status_code: 404,
        error: "not route matches with your request",
        info: "only route available: /baseUrl/random/"
    });
});
module.exports = app