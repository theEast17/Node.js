import express from 'express'
import data from './data/MOCK_DATA.js'

const app = express()
const PORT = 5000


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
    return res.json({ 'message': 'pending' })
})







app.listen(PORT, () => console.log(`server started on port ${PORT}`))
