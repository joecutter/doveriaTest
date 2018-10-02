var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Product Schema
var productSchema = mongoose.Schema({
	    name:{
	        type:String,
	        required:true
	    },
	    category:{
	        type:String,
	        required:true
	    },
	    dateCreated: {
	        type: Date,
	        default: Date.now
	    }
    
});

var Product = mongoose.model('Product',productSchema,'product');
module.exports = Product;