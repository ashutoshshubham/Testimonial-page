const {Schema, model} = require('../connection')
const mySchema = new Schema({
    name : String,
    review : String,
    stars : Number
});

module.exports = model('review', mySchema) 