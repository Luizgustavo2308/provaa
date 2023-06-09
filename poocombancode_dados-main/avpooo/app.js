const express = require('express');
const app = express();
const bodyParser =require("body-Parser ");
const produtosRoutes = require("./api/router/produtos");

app.listen(8080);
app.use(bodyParser.urlenconded({extend:false}))
app.use(bodyParser.json())
app.use('/produtos', produtosRoutes);