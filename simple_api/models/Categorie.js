const mongoose = require('../libs/mongoose');

const categorieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Укажите поле name',
        max: 255
    }
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
      virtuals: true // for console.log, to output children
    },
    timestamps: true
});

categorieSchema.virtual('articles', {
    ref: 'Reactive_Article',
    localField: '_id',
    foreignField: 'categories'
});

//МОДЕЛЬ НАЗВАННА 'Reactive_Categorie' ЧТО БЫ ОТДЕЛИТЬ В БД ТАБЛИЦУ С КАТЕГОРИЯМИ ЭТОГО САЙТА ('reactive')
//ОТ ТАБЛИЦ С КАТЕГОРИЯМИ ДРУИХ МОИХ САЙТОВ

module.exports = mongoose.model('Reactive_Categorie', categorieSchema);