const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/home', (request,response,next) => {
    response.sendFile(__dirname + '/views/home.html')
});

app.get('/about', (request,response,next) => {
    response.sendFile(__dirname +'/views/about.html')
});

app.get('/achievements', (request,response,next) => {
    response.sendFile(__dirname + '/views/achievements.html')
});

app.get('/photo-gallery', (request,response,next) => {
    response.sendFile(__dirname + '/views/photo-gallery.html');
});

app.listen(3000, () => console.log('Listening on port 3000!!'));