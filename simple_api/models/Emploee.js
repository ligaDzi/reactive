const mongoose = require('../libs/mongoose');

const emploeesSchema = mongoose.Schema({
    name: {
        type: String,
        required: 'Укажите поле name',
        max: 60
    },
    surname: {
        type: String,
        required: 'Укажите поле surname',
        max: 60
    },
    position: {
        type: String,
        required: 'Укажите поле position',
        max: 255
    },
    photo: {
        type: String,
        required: 'Укажите поле photo',
        max: 255
    },
    isManager: {
        type: Boolean,
        default: false,
    }
}, {
    timestamps: true,
    toObject: {
      virtuals: true //ТЕПЕРЬ У МОДЕЛИ БУДЕТ ВИРТУАЛЬНОЕ ПОЛЕ id ДУБЛИРУЮЩЕЕ ПОЛЕ _id
    }
});

//МОДЕЛЬ НАЗВАННА 'Reactive_Article' ЧТО БЫ ОТДЕЛИТЬ В БД ТАБЛИЦУ СО СТАТЬЯМИ ЭТОГО САЙТА ('reactive')
//ОТ ТАБЛИЦ СО СТАТЬЯМИ ДРУИХ МОИХ САЙТОВ

module.exports = mongoose.model('Reactive_Emploee', emploeesSchema);