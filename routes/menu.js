const mongoose = require('../libs/mongoose');
const Menu = require('../models/Menu');

exports.post = async (ctx, next) => {

    const { menus } = ctx.request.body;

    await menus.forEach( async menu => {
        const { name, description, alias } = menu;

        await Menu.create({
            name, 
            description,
            alias
        });
    });

    ctx.body = 'OK';
}

exports.getAll = async (ctx, next) => {
    await Menu
        .find({}, 'id name description alias')
        .then(menus => {
            ctx.body = menus.map( menu => {
                menu = menu.toObject();
                delete menu._id;
                return menu;
            })
        })
        .catch( err => {
            console.error(err);
            ctx.body = err;
        });
}