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

exports.getAll = async (ctx, next) => {
    await Categorie
        .find({}, 'id name')
        .then(categories => {
            ctx.body = categories.map(categorie => {
                categorie = categorie.toObject();
                delete categorie._id;
                return categorie;
            })
        })
        .catch( err => {
            console.error(err);
            ctx.body = err;
        });
}