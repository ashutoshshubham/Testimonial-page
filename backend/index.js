const express = require('express');

const reviewRouter = require('./routers/reviewRouter')


const cors = require('cors')


const app = express();
const port = 5000


app.use(cors({
    origin : ['http://localhost:3000']
}));


app.use(express.json());
app.use('/review', reviewRouter);





app.get('/add', (req, res) => {
    res.send('response from add')
})



app.listen(port, () => {
    console.log("server started")
})