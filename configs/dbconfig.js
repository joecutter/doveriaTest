var mongoose = require('mongoose');

function dbConnection () {
    mongoose.connect('mongodb://root:2password@ds161262.mlab.com:61262/doveria',function(err) {
        if (err) {
            console.log('MongoDB connection error: ' + err);
            process.exit(1);
        }
    });
    
    // Get Mongoose to use the global promise library
    mongoose.Promise = global.Promise;
    
    var conn = mongoose.connection;
    
    conn.on('error',function(){
        console.error.bind(console, 'connection error:')
    });
    conn.once('open', function() {
        console.log("Mongodb is up and Running");
    });
    
};


module.export = dbConnection ()