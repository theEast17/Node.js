import fs from 'node:fs'

export const middlewareFunction = (req, res, next) => {
    fs.appendFile('./record.txt', `[${new Date().toLocaleString()}] Path is: ${req.originalUrl} \n`, (err) => {
        if (err) {
            res.send(err)
        }
        next()
    })
}