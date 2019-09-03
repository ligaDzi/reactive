const mongoose = require('../libs/mongoose');
const Categorie = require('../models/Categorie');

exports.post = async (ctx, next) => {

    const { categories } = ctx.request.body;

    await categories.forEach( async categorie => {
        const { name } = categorie;

        await Categorie.create({ name });
    });

    ctx.body = 'OK';
}