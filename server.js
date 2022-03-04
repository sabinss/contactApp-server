
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const route = require('./routes/routes');
require('./connection/mongoose');

var app = express();
const PORT =process.env.PORT;
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(route)


app.listen(PORT,()=>{
    console.log( `Listening at http://localhost:${PORT}` );
})