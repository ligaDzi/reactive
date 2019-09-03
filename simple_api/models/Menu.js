const mongoose = require('../libs/mongoose');

const menuSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Укажите поле name',
        max: 255
    },
    description: {
        type: String,
        required: 'Укажите поле description',
        max: 255
    },
    alias: {
        type: String,
        required: 'Укажите поле alias',
        max: 60
    }
}, {
    timestamps: true,
    toObject: {
      virtuals: true //ТЕПЕРЬ У МОДЕЛИ БУДЕТ ВИРТУАЛЬНОЕ ПОЛЕ id ДУБЛИРУЮЩЕЕ ПОЛЕ _id
    }
});

//МОДЕЛЬ НАЗВАННА 'Reactive_Menu' ЧТО БЫ ОТДЕЛИТЬ В БД ТАБЛИЦУ С ПУНКТАМИ МЕНЮ ЭТОГО САЙТА ('reactive')
//ОТ ТАБЛИЦ С ПУНКТАМИ МЕНЮ ДРУИХ МОИХ САЙТОВ

module.exports = mongoose.model('Reactive_Menu', menuSchema);