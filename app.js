
/* 1.Bolum */
// let sayName = (require('./employe'))
//
// sayName("haydar")

/*2.Bolum*/
// let employe = require('./employe')
//
// employe.sayName('haydar')
// employe.sayAge(19)

/*callback*/
// function myName(calback){
//     console.log("hoppalaaa")
//     let file={
//         name:'haydar eren'
//     }
//     calback(file)
// }
// myName(function (file) {
//     console.log(file.name)
// })

/*manuel sunucu*/
// const http =require('http');
// const hostname ='127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req,res)=>{
//     console.log(req.url)
//     res.statusCode=200
//     res.setHeader('Content-Type','text/plain')
//     res.end("haydarrrrrer")
//     }
// )
// server.listen(port,hostname,()=>{
//     console.log(`server calisiyor,http://${hostname}:${port}`)
// })

/*expres ile sunucu*/
const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const exphbs  = require('express-handlebars')


const mysql      = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    port     : 8889,
    password : 'root',
    database :"nodemysql",
});

connection.connect(err=>{
    if (err) {
      throw err
    }
    console.log("mysql artik showundaaaaaaaaa")
});



//middleware
app.use(express.static('public'))

// handlebars plugini dokumandan alindi
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//


app.get ('/',(req,res)=>{
    res.render('site/index')
})

//database olustur ismi suanda nodemysql olarak olsuturdum
app.get ('/blog',(req,res)=>{
    let sql ='CREATE DATABASE nodemysql';
    connection.query(sql,err=>{
        if (err) {
          throw err
        }
    })
    res.render('site/blog')
})
// database table olustur daha sonra yukarda database  kismina dahil edilmeli olusturulan isim
app.get ('/about',(req,res)=>{
    let sql = 'CREATE TABLE posts(id INT AUTO_INCREMENT,title VARCHAR(50),content VARCHAR(50),date DATE,PRIMARY KEY(id))'
    connection.query(sql,err=>{
        if (err) {
          throw err
        }
    })
    res.render('site/about')
})

//olustulan tablo alanlari dolduruluyor
app.get ('/contact',(req,res)=>{
    let posts = {title: "ilk title", content :"ilk content alani",date:'1991-10-21'}
    let sql = 'INSERT INTO posts SET ?'
    connection.query(sql,posts,err=>{
        if (err) {
          throw err
        }
    })

    res.render('site/contact')
})

// tablo verilerini getir
app.get ('/login',(req,res)=>{
    let sql = 'SELECT * FROM posts'
    let query = connection.query(sql,(err,results)=>{
        if (err) {
          throw err
        }
        console.log(results)
    })
    res.render('site/login')
})

app.get ('/register',(req,res)=>{
    res.render('site/register')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
