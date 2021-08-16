const md5 = require('md5')
const fs = require('fs')
const text = `Hello World`

console.log(`Hello World md5 hash: ${md5(text)}`)
fs.readFile('example.txt',  (err,buf)=>{
   
    const body = [];
    body.push(buf)
    const parseBody = Buffer.concat(body).toString()
    console.log(`Text in example.txt : ${parseBody}`)
    console.log(`md5 hash: ${md5(parseBody)}`)
})
