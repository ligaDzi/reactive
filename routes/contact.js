const mongoose = require('../libs/mongoose');
const Contact = require('../models/Contact');

exports.post = async (ctx, next) => {
    
    const { contacts } = ctx.request.body;

    await contacts.forEach( async contact => {
        const { title, adress, email, phone } = contact;
        await Contact.create({
            title,
            adress,
            email,
            phone
        })
    });
    
    ctx.body = 'OK';
}

exports.getAll = async (ctx, next) => {
    await Contact
        .find({}, 'id title adress email phone')
        .then( contacts => {
            ctx.body = contacts.map( contact => {
                contact = contact.toObject();
                delete contact._id;
                return contact;
            });
        })
        .catch( err => {
            console.error(err);
            ctx.body = err;
        });
}