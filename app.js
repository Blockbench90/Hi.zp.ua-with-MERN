const express = require('express')
const mongoose = require('mongoose')
//чтобы получить данные из файла config его надо подключить
const config = require('config')
//берем из файла config значение
const PORT = config.get('port')
const MongoURL = config.get('mongoUrl')
const parser = require('body-parser')
//чисто для себя проверяю, пришло ли значение
console.log(`подключения к БД`)

const app = express()

app.use(parser.json())
//подключаю роут для обработки
app.use('/api', require('./routes/user-rout'))

//подключаюсь к базе данных, через предохранитель - функцию, которая будет вызываться сразу после создания
async function startConnectWithMongoDB () {
    try {
        await mongoose.connect(MongoURL, {
            useNewUrlParser: true,               //несколько параметров для корректной работы
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        //вместо хардкодного 5000 в параметрах прослушки сервера, вставляю переменную PORT
        app.listen(PORT, ()=> console.log(`Сервер стартонул`))
    } catch (e) {
      //если вдруг возникнет ошибка подключения к базе данных, я выведу в консоль эту ошибку и завершу глобально процесс
        console.log("Ошибка подключения к базе данных", e.message)
        process.exit(1)
    }
}
startConnectWithMongoDB()