import http from 'node:http'
import fs from 'node:fs'
import  url  from 'node:url'
import express from 'express'


// const server=(req,res)=>{
//         if(req.url==='/favicon.ico') return res.end()
//         const data=`${Date.now()}: ${req.url} new request recieved \n`
//         const myUrl=url.parse(req.url,true)
//         console.log(myUrl)
//         fs.appendFile('./contact/userDetails',data,(err,data)=>{
//             switch(myUrl.pathname){
//                 case '/':
//                 res.end('Home Page')
//                 break
//                 case '/about':
//                 const qp=myUrl.query.name
//                 res.end(`hii i am ${qp}`)
//                 break
//                 default:
//                 res.end('404 not found')
//             }
//         })
// }

const app=express()

app.get('/',(req,res)=>{
    res.send('hello')
})
app.get('/about',(req,res)=>{
    res.send('about' )
})
app.get('/contact',(req,res)=>{
    res.send('contact'+ req.query.name)
})

app.listen(5000,()=>console.log('complete'))

// const myServer=http.createServer(app)
// myServer.listen(5000,()=>console.log('successfully completed'))