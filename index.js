import express from 'express'; //esm
const app = express();

app.listen(3000, ()=>{
    console.log('listening on port 3000');
});

app.get('/', (req, res) => {
    res.send('Hello World');
})