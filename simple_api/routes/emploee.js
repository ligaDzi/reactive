const mongoose = require('../libs/mongoose');
const Emploee = require('../models/Emploee');

exports.post = async (ctx, next) => {
    const { emploees } = ctx.request.body;

    await emploees.forEach( async emploee => {
        const { name, surname, position, photo, isManager} = emploee;

        await Emploee.create({
            name,
            surname,
            position,
            photo,
            isManager
        })
    });

    ctx.body = 'OK';
}

exports.getAll = async (ctx, next) => {
    await Emploee
        .find({}, 'id name surname position photo isManager')
        .then( emploees => {
            ctx.body = emploees.map( emploee => {
                emploee = emploee.toObject();
                delete emploee._id;
                return emploee;
            });
        })
        .catch( err => {
            console.error(err);
            ctx.body = err;
        });
}