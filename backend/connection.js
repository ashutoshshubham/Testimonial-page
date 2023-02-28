const mongoose = require('mongoose');
const dbName = 'Testimonial'
const url = `mongodb+srv://ashutoshshubham:ashutosh@cluster0.cqjsjz0.mongodb.net/${dbName}?retryWrites=true&w=majority`


mongoose.connect(url)
.then((result) => {
    console.log("Database Connect")
}).catch((err) => {
    console.log(err)
});

module.exports = mongoose;