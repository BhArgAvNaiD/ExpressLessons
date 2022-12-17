const router = require('express').Router();
const apikeyMidware = require('../middlewares/apikey');

router.get('/',(req,res)=>{
    res.render('index',{title:'MyHomePage'});
})

router.get('/about',(req,res)=>{
    res.render('about');
})

router.get('/download',(req,res)=>{
    res.download(path.resolve(__dirname)+'/about.html');
})

router.get('/products',(req,res)=>{
    res.render('products',{title:'MyProductspage'});
})

router.get('/api/products',(req,res)=>{
    res.json([
        {
            id:'123',
            name:'chrome'
        },
        {
            id:'321',
            name:'microsoft'
        }
    ])
})
module.exports = router;