var express = require('express');
var router = express.Router();
const { Pool, Client } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sanpham',
  password: '1',
  port: 5432,
})


/* GET home page. */
router.get('/', function(req, res, next) { });

// api get data from postgresql
router.get('/getdata01', function(req, res, next) {
  //get data
  pool.query('SELECT * FROM public.product_info', (err,response)=>{
    if(err){
      console.log(err);
    }
    else{
      res.send(response.rows);
    }
    // pool.end();
  })
});
  router.get('/add', function(req, res, next) { 
    res.render('add',{})
  });

  router.post('/add', function(req, res, next) { 
    var product_name = req.body.product_name;
    var product_price = req.body.product_price;
    var image = req.body.image;
    
    pool.query("INSERT INTO product_info (product_name,product_price,image) values ($1,$2,$3)", [product_name,product_price,image], (err,response)=>{
      if(err){
        res.render(err);
      }
      else{ 
        res.send("Da them du lieu thanh cong" +product_name +product_price+image);
      }
    })
  });


module.exports = router;
