import { articles as articleList } from '../fixtures'
import { 
    LOAD_ALL_ARTICLES,
    LOAD_FROM_TO_ARTICLES } from '../constants'

import { arrToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const ArticleRecord = Record({    
    id: undefined,
    title: undefined,
    description: undefined,
    text: undefined,
    images: [],
    categories: [],
    date: undefined
});

const ReducerState = Record({
    carousel: new OrderedMap({}),
    all: new OrderedMap({})
})

const defaultArticles = new ReducerState();

export default (articles = defaultArticles, action) => {

    const { type, payload } = action;

    switch(type) {
        case LOAD_ALL_ARTICLES:
            const allArticles = arrToMap( articleList, ArticleRecord );
            
            return articles
                    .set('all', allArticles)
                    .set('carousel', allArticles.slice(0, 5));

        case LOAD_FROM_TO_ARTICLES:            
            return articles.set(
                    'all', 
                    articles.all.slice( payload.from, payload.to )
                );
    }
    
    return articles;
}