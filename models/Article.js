const mongoose = require('../libs/mongoose');

const articlesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: 'Укажите поле title',
        max: 255
    },
    description: {
        type: String,
        required: 'Укажите поле description',
        max: 255
    },
    text: {
        type: String
    },
    autor: {
        type: String,
        default: 'Admin',
        max: 255
    },
    isSlider: {
        type: Boolean,
        default: false
    },
    images: [String],
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reactive_Categorie'
    }],
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    toObject: {
      virtuals: true //ТЕПЕРЬ У МОДЕЛИ БУДЕТ ВИРТУАЛЬНОЕ ПОЛЕ id ДУБЛИРУЮЩЕЕ ПОЛЕ _id
    }
});

//МОДЕЛЬ НАЗВАННА 'Reactive_Article' ЧТО БЫ ОТДЕЛИТЬ В БД ТАБЛИЦУ СО СТАТЬЯМИ ЭТОГО САЙТА ('reactive')
//ОТ ТАБЛИЦ СО СТАТЬЯМИ ДРУИХ МОИХ САЙТОВ

module.exports = mongoose.model('Reactive_Article', articlesSchema);