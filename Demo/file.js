import fs from 'node:fs'
import os from 'node:os'

console.log(os.cpus().length)  // cores of our machine



// 1- write file
// fs.writeFileSync('./demo.txt','I love node')
fs.writeFile('./demo.txt','I love node',(err)=>{
    return err
})


// 2-read file
// fs.readFileSync('./demo.txt','utf-8')
fs.readFile('./demo.txt',"utf-8",(err,result)=>{
    if(err){
        return err
    }
    console.log(result)
})

fs.appendFile('./demo.txt',' hello node',(err)=>{
    if (err) {
        console.error(err);
      } else {
        console.log('Data appended successfully');
      }
})

fs.cp('./demo.txt','./copy.txt',(err)=>{
    if (err) {
        console.error(err);
      } else {
        console.log('Copied successfully');
      }
})
// non-blocking request
// fs.unlink('./copy.txt',(err)=>{
//     if (err) {
//         console.error(err);
//       } else {
//         console.log('deleted successfully');
//       }
// })





