const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const mainRouter = require('./routes/router');
// const productRouter = require('./routes/products');


app.set('view engine' , 'ejs');


app.use(mainRouter);
app.use("/",require('./routes/products'));



app.listen(3000,()=>{
    console.log(`listening on port ${PORT}`);
});