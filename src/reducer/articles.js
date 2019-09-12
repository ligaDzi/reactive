import { articles as articleList } from '../fixtures'
import { 
    LOAD_ALL_ARTICLES,
    LOAD_FROM_TO_ARTICLES,
    SELECT_ARTICLE,
    CLOSE_ARTICLE,
    LOAD_SLIDER_ARTICLES,
    UPDATE_ALL_ARTICLES,
    START,
    SUCCESS,
    FAIL } from '../constants'

import { arrToMap } from '../helpers'
import { Record, OrderedMap, merge } from 'immutable'

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

const ArticleListRecord = Record({
    isLoading: false,
    isLoaded: false,
    isError: false,
    entities: new OrderedMap({})
});

const SelectArticle = Record({
    isLoading: false,
    isLoaded: false,
    isError: false,
    artFocus: new ArticleRecord({}),
    artNext: new ArticleRecord({})
});

const ReducerState = Record({
    slider: new ArticleListRecord({}),
    all: new ArticleListRecord({}),
    selectArticle: new SelectArticle({}),

    carousel: new OrderedMap({}),
    artFocus: new ArticleRecord({}),
    artNext: new ArticleRecord({})
})

const defaultArticles = new ReducerState();

export default (articles = defaultArticles, action) => {

    const { type, payload, response } = action;    
    const allArticles = arrToMap( articleList, ArticleRecord );

    switch(type) {
        case LOAD_ALL_ARTICLES:            
            return articles
                .set('all', allArticles);
                    
        case LOAD_SLIDER_ARTICLES + START: 
            return articles
                .setIn(['slider', 'isLoading'], true);

        case LOAD_SLIDER_ARTICLES + SUCCESS:    
            return articles
                .updateIn(['slider', 'entities'], entities => arrToMap(response, ArticleRecord).merge(entities))
                .setIn(['slider', 'isLoading'], false)                
                .setIn(['slider', 'isLoaded'], true)                
                .setIn(['slider', 'isError'], false);

        case LOAD_SLIDER_ARTICLES + FAIL: 
            return articles
                .setIn(['slider', 'isLoading'], false)                   
                .setIn(['slider', 'isLoaded'], false)                   
                .setIn(['slider', 'isError'], true);                   
        
        case LOAD_FROM_TO_ARTICLES + START:
            return articles.setIn(['all', 'isLoading'], true);

        case LOAD_FROM_TO_ARTICLES + SUCCESS:
            return articles
            .updateIn(['all', 'entities'], entities => arrToMap(response, ArticleRecord).merge(entities))
            .setIn(['all', 'isLoading'], false)                
            .setIn(['all', 'isLoaded'], true)                
            .setIn(['all', 'isError'], false);

        case LOAD_FROM_TO_ARTICLES + FAIL: 
            console.error(payload.err);                     
            return articles
                .setIn(['all', 'isLoading'], false)                   
                .setIn(['all', 'isLoaded'], false)                   
                .setIn(['all', 'isError'], true); 

        case SELECT_ARTICLE + START:
            return articles.setIn(['selectArticle', 'isLoading'], true);

        case SELECT_ARTICLE + SUCCESS: 
            document.body.classList.add('body-overflow-hidden');              

            return articles
                .setIn(['selectArticle', 'artFocus'], new ArticleRecord(payload.artFocus))
                .setIn(['selectArticle', 'artNext'], new ArticleRecord(payload.artNext))
                .setIn(['selectArticle', 'isLoading'], false)                
                .setIn(['selectArticle', 'isLoaded'], true)                
                .setIn(['selectArticle', 'isError'], false);
  
        case SELECT_ARTICLE + FAIL: 
            console.error(payload.err);            
            return articles
                .setIn(['selectArticle', 'isLoading'], false)                
                .setIn(['selectArticle', 'isLoaded'], false)                
                .setIn(['selectArticle', 'isError'], true);
        
        case UPDATE_ALL_ARTICLES:
            return articles
                .updateIn(['all', 'entities'], entities => entities.merge(arrToMap(payload.newArticles, ArticleRecord)))
            
        case CLOSE_ARTICLE:
            document.body.classList.remove('body-overflow-hidden'); 

            const sortArtList = articles.all.entities.sort((x, y) => {
                if(x.date > y.date) return 1;
                if(x.date === y.date) return 0;
                if(x.date < y.date) return -1;
            });

            return articles
                .setIn(['all', 'entities'], sortArtList.slice(0, 5))
                .setIn(['selectArticle', 'artFocus'], new ArticleRecord({}))
                .setIn(['selectArticle', 'artNext'], new ArticleRecord({}));
            
    }
    
    return articles;
}