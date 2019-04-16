import { articles as articleList } from '../fixtures'
import { 
    LOAD_ALL_ARTICLES,
    LOAD_FROM_TO_ARTICLES,
    SELECT_ARTICLE,
    CLOSE_ARTICLE,
    LOAD_CAROUSEL_ARTICLES } from '../constants'

import { arrToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const ArticleRecord = Record({    
    id: undefined,
    title: undefined,
    description: undefined,
    text: undefined,
    autor: undefined,
    images: [],
    categories: [],
    date: undefined
});

const ReducerState = Record({
    carousel: new OrderedMap({}),
    all: new OrderedMap({}),
    artFocus: new ArticleRecord({}),
    artNext: new ArticleRecord({})
})

const defaultArticles = new ReducerState();

export default (articles = defaultArticles, action) => {

    const { type, payload } = action;    
    const allArticles = arrToMap( articleList, ArticleRecord );

    switch(type) {
        case LOAD_ALL_ARTICLES:
            
            return articles
                    .set('all', allArticles);
                    
        case LOAD_CAROUSEL_ARTICLES:
                    
            return articles
                    .set('carousel', allArticles.slice(0, 5));

        case LOAD_FROM_TO_ARTICLES:            
            return articles.set(
                    'all', 
                    allArticles.slice( payload.from, payload.to )
                );

        case SELECT_ARTICLE: 
            // Когда я реализую сервер сюда будет приходить payload.response с 2мя статьями:
            // выбранной и следующей за ней.  
            // А этот код до document.body... пока временный
            let artFocus = null;
            let artNext = null;
            articleList.forEach( (article, i, artList) => {
                if( payload.id === article.id ){
                    artFocus = new ArticleRecord( artList[i] );
                    artNext = new ArticleRecord( (i + 1) < artList.length ? artList[i+1] : artList[0] );
                }
            });           

            document.body.classList.add('body-overflow-hidden'); 

            if( articles.all.get(artNext.id) ) {
                return articles
                        .set('artFocus', artFocus)
                        .set('artNext', artNext);
            } else {
                return articles
                        .setIn(['all', artNext.id], artNext)
                        .set('artFocus', artFocus)
                        .set('artNext', artNext);
            }
            
        case CLOSE_ARTICLE:
            document.body.classList.remove('body-overflow-hidden'); 
            return articles
                    .set('all', articles.all.slice(0, 5))
                    .set('artFocus', new ArticleRecord({}))
                    .set('artNext', new ArticleRecord({}));
            
    }
    
    return articles;
}