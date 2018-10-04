var express = require('express');
var router = express.Router();
var Product = require('../models/productsModel')
var Category = require('../models/categoryModel')
var con = require('../configs/dbconfig')

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.aggregate([{
    $group: {
      _id: '$category',
      count: {$sum: 1}
    }
  }],function(error, data){
	if(error){
  		return res.send({'code':400, 'data':error})
  	}else{
  	   return res.send({'code':200, 'data':data})
  	}
  })
});

module.exports = router;
