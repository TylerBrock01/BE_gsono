import express from 'express'; //esm
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('listening on port: ', PORT);
});

app.get('/', (req, res) => {
    res.send('Hello World');
})