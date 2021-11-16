const app = require('express')()

const port = 4000
const api = require('./routers/route')

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.query.action}`)
    if (req.query.action == '2') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send(`Hello ${req.query.name}`)
    } else if (req.query.action == '3') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send(`Сумма чисел ${req.query.num1}+${req.query.num2}=${Number(req.query.num2) + Number(req.query.num1)}`)
    } else if (req.query.action == '4') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send(`Случайное число из диапозона: ${req.query.num1}-${req.query.num2}=${Math.floor(Math.random() * Number(req.query.num2) + Number(req.query.num1))}`)
    } else if (req.query.action == '5') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send(`Сегодня ${new Date().toString()}`)
    } else if (req.query.action == '6') {
        if (Number(req.query.num1) > Number(req.query.num2)) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.send(`Большее число - ${req.query.num1}`)
        } else {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.send(`Большее число - ${req.query.num2}`)
        }
    } else if (req.query.action == '7') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send('ссылка на изображение')
    } else if (req.query.action == '8') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
        res.send(`Ваш возраст - ${2021 - Number(req.query.year)}`)
    } else if (req.query.action == '9') {
        let r = Math.floor(Math.random() * 3)
        if (r == 0) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.send(`месяц - ${req.query.m}`)
        } else if (r == 1) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.send(`день - ${req.query.d}`)
        } else if (r == 2) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
            res.send(`день - ${req.query.y}`)
        }
    }
    next()
})

app.use(api)
app.listen(port, () => {
    console.log('server is listening on port 4000')
})
