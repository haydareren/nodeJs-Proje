
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

//middleware
app.use(express.static('public'))

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get ('/',(req,res)=>{
    res.render('site/index')
})
app.get ('/blog',(req,res)=>{
    res.render('site/blog')
})
app.get ('/about',(req,res)=>{
    res.render('site/about')
})
app.get ('/contact',(req,res)=>{
    res.render('site/contact')
})
app.get ('/login',(req,res)=>{
    res.render('site/login')
})
app.get ('/register',(req,res)=>{
    res.render('site/register')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
