import { createSelector } from 'reselect'

const articleGetter = state => state.articles;
const categorieGetter = state => state.categories;

export const filtreatedArticleSelector = createSelector( articleGetter, categorieGetter, (articles, categories) => {

    const { selected } = categories;    
    
    const artFilt = articles.filter( article => {
        if(!selected.length) return true;

        let isCheck = false;
        article.categories.forEach(cat => {
            if( selected.includes(cat.id) ){
                isCheck = true;
            }
        });
        return isCheck;        
    });

    return artFilt;
});