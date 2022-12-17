const router = require('express').Router();

router.get('/products',(req,res)=>{
    res.render('products',{title:'MyProductspage'});
})

module.exports = router;