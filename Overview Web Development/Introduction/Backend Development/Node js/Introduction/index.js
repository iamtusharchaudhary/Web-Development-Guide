const express = require('express')
const app = express()


const port = 4000;

app.get('/', (req,res) => {
    res.send("Tushar Chaudhary")
})
 app.get('/data', (req,res) => {
    res.send("Our Data Is Created At Own Server")
 })

app.listen(port , () => {
    console.log(`server running at http://localhost:${port}`);
    
})