const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('client'));
app.use('/styles', express.static(__dirname + 'client/styles'));
app.use('/script', express.static(__dirname + 'client/script'));

app.listen(PORT, () => {
    console.log(`App up at port ${PORT}`)
})