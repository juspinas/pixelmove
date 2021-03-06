const express = require('express');
const app = express();
const request = require("request-promise");
const PORT = process.env.PORT || 3000

app.use(express.static("public"));
app.get('/', (req, res) => res.sendFile(__dirname + "/client/index.html"))

app.listen(PORT, () => console.log('Example app listening on port 3000!'))