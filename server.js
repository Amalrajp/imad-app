var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());

var config={
    user:"amalrajp83",
    database:"amalrajp83",
    host:"db.imad.hasura-app.io",
    port:"5432",
    password:process.env.DB_PASSWORD
};

function createTemplate(data){    
    var title=data.title;
    var heading=data.heading;
    var content=data.content;
    var date=data.date;
    var htmlTemplate=`
        <html>
        <head>
            <title>
                ${title}
            </title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                     <a href="/">Home</a>
                </div>
                <hr>
                
                <div>
                    <h1>
                        ${heading}
                    </h1>
                        ${date.toDateString()}
                    <br>
                    <p>
                        ${content}
                    </p>
                </div>
            </div>
        </body>
        </html>
        `;
    return htmlTemplate;
} 

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var counter=0;
app.get('/counter', function (req, res) {
  counter+=1;
  res.send(counter.toString());
});
var names=[];

function hash(input,salt){
    var hashedpass = crypto.pbkdf2Sync(input, salt, 100000, 64, 'sha512');
    return ["pbkdf2Sync","100000",salt,hashedpass.toString('hex')].join('$');
}

app.get('/hash/:input',function(req,res){
    var hp=hash(req.params.input,"this-is-salt");
    res.send(hp);
});

app.get('/create-user',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    pool.query('Insert into user (username,password) values($1,$2)',[username,password],function(req,res){
        if(err)
            res.status(500).send(err.toString());
        else{
            res.send("user created successfully ");
        }
    });
});

app.get('/submit-name',function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
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

var pool=new Pool(config);

app.get('/test-db', function (req, res) {
    pool.query('SELECT * from article', (err, result)=> {
        if(err)
            res.status(500).send(err.toString());
        else{
            res.send(JSON.stringify(result.rows));
        }
    });
});
app.get('/articles/:articleName', function (req, res) {
  var articleName=req.params.articleName; 
  pool.query("select * from article where title=$1",[articleName],(err,result)=>{
      if (err)
        res.status(500).send(err.toString());
      else{
          if(result.length===0)
            res.send("Article not found");
          else
            var articleData=result.rows[0];
             res.send(createTemplate(articleData));
      }
        
  });
 
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
