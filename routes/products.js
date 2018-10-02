var express = require('express');
var router = express.Router();
var Product = require('../models/productsModel')
var Category = require('../models/categoryModel')
var con = require('../configs/dbconfig')



/** ADD PRODUCTS */
router.post('/addprod', function(req, res, next) {

  var product = new Product()
  product.name = req.body.name
  product.category = req.body.category

  Product.findOne({"name":req.body.name},function(error, data){
  if(error){
      return res.send({'code':400, 'data':error})
    }else{
       // return res.send({'code':200, 'data':data})
       console.log(JSON.stringify(data))
       if(data === null){
         product.save((error, data)=>{
           if(error){
             return res.send({'code':400, 'data':error})
           }else{
              return res.send({'code':200, 'data':data})
           }
         })
       }else{
         return res.send({'code':300, 'data':"Existing Product"})
       }


    }
  })
});

/** ADD CATEGORY */
router.post('/addcat', function(req, res, next) {

	var category = new Category()
  category.name = req.body.name

  Category.findOne({"name":req.body.name},function(error, data){
  if(error){
      return res.send({'code':400, 'data':error})
    }else{
      // return res.send({'code':200, 'data':data})
      console.log(JSON.stringify(data))
      if(data === null){
        category.save((error, data)=>{
          if(error){
            return res.send({'code':400, 'data':error})
          }else{
             return res.send({'code':200, 'data':data})
          }
        })
      }else{
        return res.send({'code':300, 'data':"Existing Category"})
      }


    }
  })
});


/* FETCH ALL PRODUCTS. */
router.get('/allprod', function(req, res, next) {

  Product.find({},function(error, data){
	if(error){
  		return res.send({'code':400, 'data':error})
  	}else{
  	   return res.send({'code':200, 'data':data})
  	}
  })
});

/* FETCH ALL CATEGORY. */
router.get('/allcat', function(req, res, next) {

  Category.find({},function(error, data){
	if(error){
  		return res.send({'code':400, 'data':error})
  	}else{
  	   return res.send({'code':200, 'data':data})
  	}
  })
});


/** Filters */

/**DELETE*/
router.get('/delete/:id', function(req, res, next) {
  res.send('respond with a resource');
});

/**EDIT*/
router.get('/edit/:id', function(req, res, next) {
  res.send('respond with a resource');
});

/**VIEW*/
router.get('/view/:id', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
