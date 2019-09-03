const mongoose = require('../libs/mongoose');
const Article = require('../models/Article');
const Categorie = require('../models/Categorie');

exports.post = async (ctx, next) => {

    const { articles } = ctx.request.body;
    const categoriesTable = await Categorie.find({});
   
    await articles.forEach( async article => {
        const { title, description, text, autor, images, categories, date} = article;

        let articleObj = {
            title,
            description,
            text,
            autor,
            images,
            categories: [],
            date
        }
       
        await categories.forEach( categorie => {
            const { name } = categorie;
            const categorObj = categoriesTable.filter( cat => cat.name === name);
            
            articleObj.categories.push(categorObj[0]);            
        });

        await Article.create(articleObj);
    });


    ctx.body = 'OK';
}

exports.getByID = async (ctx, next) => {
    const { id } = ctx.params;    

    Article
        .findById(id)
        .populate('categories')
        .then( article => {
            console.log(article);        
        });

    Categorie
        .findById('5d67c5db0a28675d4c091aeb')
        .populate('articles')
        .then( categorie => console.log(`Categorie articles length: ${categorie.articles.length}`) );

    ctx.body = 'OK';
}