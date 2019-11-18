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

exports.getSlider = async (ctx, next) => {
    await Article
        .find({ isSlider: true }, 'id title description text autor images categories date isSlider')
        .limit(5)
        .populate('categories', 'id name')
        .then( articles => {
            ctx.body = articles.map( article => {
                article = article.toObject();
                delete article._id;
                article.categories = article.categories.map( categor => {
                    delete categor._id;
                    return categor;
                });
                return article;
            });
        })
        .catch( err => {
            console.error(err);
            ctx.body = err;
        });
}

exports.getAll = async (ctx, next) => {
    let { selectCategories } = ctx.request.body;    

    selectCategories = selectCategories.length <= 0 ? await getAllCategories() : selectCategories;        

    await Article
        .find({ categories: {$in: selectCategories}}, 'id title description text autor images categories date isSlider')
        .sort('date -title -autor')
        .populate('categories', 'id name')
        .then( articles => {            
            ctx.body = articles.map( article => {
                article = article.toObject();
                delete article._id;
                article.categories = article.categories.map( categor => {
                    delete categor._id;
                    return categor;
                });
                return article;
            });
        })
        .catch( err => {
            console.error(err);
            ctx.body = err;
        });
}

exports.getFiveStartingFrom = async (ctx, next) => {
    let { from, selectCategories } = ctx.request.body;    

    selectCategories = selectCategories.length <= 0 ? await getAllCategories() : selectCategories;        

    await Article
        .find({ isSlider: false, categories: {$in: selectCategories}}, 'id title description text autor images categories date isSlider')
        .sort('date -title -autor')
        .skip(from)
        .limit(5)
        .populate('categories', 'id name')
        .then( articles => {            
            ctx.body = articles.map( article => {
                article = article.toObject();
                delete article._id;
                article.categories = article.categories.map( categor => {
                    delete categor._id;
                    return categor;
                });
                return article;
            });
        })
        .catch( err => {
            console.error(err);
            ctx.body = err;
        });
}

async function getAllCategories() {
    
    let categories = [];
    await Categorie
        .find({})
        .then( catList => {
            categories = catList.map( cat => cat.id);
        })
        .catch( err => console.error(err));

    return categories;
}