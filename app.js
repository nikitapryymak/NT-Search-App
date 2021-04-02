const express = require("express");
const ejs = require('ejs');
const axios = require('axios');


// initialize modules and middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));
app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get("/", (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/resources', (req, res) => {
    res.sendFile(__dirname + '/public/resources.html')
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
});

app.post('/contact', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.email);
    console.log(req.body.phone);
    console.log(req.body.contactMessage);
    res.sendFile(__dirname + '/public/success.html')
})

app.post('/search', (req, res) => {
    const userReq = req.body.userReq;

    axios.get(`https://bible-api.com/${userReq}`)
    .then(resp => {
        console.log(resp.data);
        const dataResponse = resp.data;
        res.render('bible', {userReq: userReq, dataResponse: dataResponse});
    })
    .catch(err => {
        console.log(err, 'There was an error!');
        res.send('There was an error! <br> Make sure your search looks like: "Titus:1-3" (for entire books) and "John 3:16" for specific verses/passages.')
    });
});



app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running on port 3000.");
});