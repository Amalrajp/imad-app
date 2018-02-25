var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
    'article-one': {
        title:"article_one",
        heading:"Article One",
        content:`<p>this the paragraph of article one.</p>
        <p>this the paragraph of article one.</p>
        <p>this the paragraph of article one.</p>`
    },
    'article-two': {
        title:"article_two",
        heading:"Article Two",
        content:`<p>this the paragraph of article one.</p>
        <p>this the paragraph of article one.</p>
    `},
    'article-three': {
        title:"article_three",
        heading:"Article Three",
        content:`<p>this the paragraph of article one.</p>
        <p>this the paragraph of article one.</p>`
    }   

};
function createTemplate(data){    
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var htmlTemplate=`
        <html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="center">
                        <a href="/">home</a>
            </div>
            <div class="center">
                <h1 class="center text-big bold">
                    ${heading}
                </h1>
                <p class="center">
                    ${content}
                </p>
            </div>
        </body>
        </html>
        `;
    return htmlTemplate;
} 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/pic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pic.jpg'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/:articleName', function (req, res) {
  var articleName=req.params.articleName;  
  res.send(createTemplate(articles[articleName]));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
