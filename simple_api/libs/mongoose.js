const mongoose = require('mongoose');
const config = require('../config/default');

//ЭТО НЕОБХОДИМО ЧТО БЫ МОЖНО БЫЛО ИСПОЛЬЗОВАТЬ MONGOOSE С KOA
//ЛИБО МОЖНО ТАК: mongoose.Promise = Promise; 
//НО ПРОИЗВОДИТЕЛЬНОСТЬ У ТАКОГО ВАРИАНТА НИЖЕ, ЧЕМ У ПАКЕТА 'bluebird'
mongoose.Promise = require('bluebird');     

// ВЫВОДИТЬ В КОНСОЛЬ ВСЕ ЗАПРОСЫ К БД В РЕЖИМЕ ОТЛАДКИ
if(process.env.MONGOOSE_DEBUG) {
    mongoose.set('debug', true);
}

mongoose.connect(
    process.env.MONGO_URL,  
    { useNewUrlParser: true },
    () => console.log(`DB connected`)
);

const db = mongoose.connection;

db.on('error', () => console.log(`Error DB`));

module.exports = mongoose;