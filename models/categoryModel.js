var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//Category Schema
var categorySchema = mongoose.Schema({
	    name:{
	        type:String,
	        required:true
	    },
	    dateCreated: {
	        type: Date,
	        default: Date.now
	    }
    
});

var Category = mongoose.model('Category',categorySchema,'category');
module.exports = Category;

