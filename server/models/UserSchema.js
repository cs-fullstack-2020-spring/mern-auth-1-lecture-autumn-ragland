let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let UserSchema = new Schema (
    {
        name : {required : true, type : String},
        password : {required : true, type : String},
        email : {required : true, type : String},
        date : {type : Date, default : Date.now}
    }
);

module.exports = mongoose.model('users200427', UserSchema);
