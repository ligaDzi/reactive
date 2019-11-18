const mongoose = require('../libs/mongoose');

const contactSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'Укажите поле title',
        max: 255
    },
    adress: {
        type: String,
        required: 'Укажите поле adress',
        max: 255
    },
    email: {
        type: String,
        min: 6,
        max: 255
    },
    phone: {
        type: String,
        max: 255
    }
}, {
    timestamps: true,
    toObject: {
      virtuals: true //ТЕПЕРЬ У МОДЕЛИ БУДЕТ ВИРТУАЛЬНОЕ ПОЛЕ id ДУБЛИРУЮЩЕЕ ПОЛЕ _id
    }
});

//МОДЕЛЬ НАЗВАННА 'Reactive_Contact' ЧТО БЫ ОТДЕЛИТЬ В БД ТАБЛИЦУ С КОНТАКТАМИ ЭТОГО САЙТА ('reactive')
//ОТ ТАБЛИЦ С КОНТАКТАМИ ДРУИХ МОИХ САЙТОВ

module.exports = mongoose.model('Reactive_Contact', contactSchema);