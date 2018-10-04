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
var id = req.params.id
    Product.findOneAndRemove({"name":id} ,function(error, data){
  	if(error){
    		return res.send({'code':400, 'data':error})
    	}else{
        const response = {
            message: "Item successfully deleted",
            id: data._id
        };
    	   return res.send({'code':200, 'data':response})
    	}
    })
});

/**EDIT*/
router.post('/edit', function(req, res, next) {
  var data ={
    "_id":req.body.id,
    "dateCreated":req.body.dateCreated,
    "name":req.body.product,
    "category":req.body.category
  }
    // console.log(JSON.stringify(req.body.dateCreated));
    Product.findByIdAndUpdate(req.body.id, data, {new:true}, (error, update)=>{
  	if(error){
    		return res.send({'code':400, 'data':error})
    	}else{
        // console.log(JSON.stringify(update));
        return res.send({'code':200, 'data':update})
    	}
    })
});


/**VIEW*/
router.get('/view/:id', function(req, res, next) {
  var id = req.params.id

    Product.findOne({"name":id},function(error, data){
    if(error){
        return res.send({'code':400, 'data':error})
      }else{
         return res.send({'code':200, 'data':data})
      }
    })
});

module.exports = router;
