const {Schema, model} = require('mongoose')
//создание схемы пользователя с полями имя и сообщение
let time = new Date().toLocaleDateString();
const schema = new Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true},
    sex: {type: String, require: true},
    time: {type: String, default: time},
    comment: {type: String, require: true}
})

module.exports = model('User', schema)