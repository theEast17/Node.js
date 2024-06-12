import express, { urlencoded } from 'express'
import data from './data/MOCK_DATA.js'
import fs from 'node:fs'
const app = express()
const PORT = 5000


app.use(urlencoded({ extended: false }))
// app.get('/users', (req, res) => {
//     const html = `
//     <ul>
//     ${data.map((user)=> `<p>-${user.first_name}<p/>`).join("")}
//     </ul>
//     `
//     return res.send(html)
// })

app.route('/api/users/:id')
    .get((req, res) => {
        const params = Number(req.params.id)
        const find = data.find((data) => data.id === params)
        return res.json(find)
    })
    .patch((req, res) => {
        return res.json({ 'message': 'pending' })
    })
    .delete((req, res) => {
        return res.json({ 'message': 'pending' })
    })

app.get('/api/users', (req, res) => {
    return res.json(data)
})



app.post('/api/users', (req, res) => {
    const body = req.body
    data.push({  ...body , id: data.length + 1})
    fs.writeFile('./data/MOCK_DATA.js', JSON.stringify(body), (err,data) => {
        return res.json({status:'success',id:data.length})
    })
})







app.listen(PORT, () => console.log(`server started on port ${PORT}`))
