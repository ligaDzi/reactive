import { createSelector } from 'reselect'
import { mapToArr } from '../helpers'

const articleGetter = state => state.articles.all;
const categorieGetter = state => state.categories;

export const filtreatedArticleSelector = createSelector( articleGetter, categorieGetter, (articles, categories) => {

    const { selected } = categories;        
    
    const artFilt = mapToArr( articles ).filter( article => {
        
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