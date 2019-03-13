import { articles as articleList } from '../fixtures'

import { 
    LOAD_ALL_ARTICLES,
    LOAD_FROM_TO_ARTICLES } from '../constants'

export default (articles = articleList, action) => {

    const { type, payload } = action;

    switch(type) {
        case LOAD_ALL_ARTICLES:
            return articles;

        case LOAD_FROM_TO_ARTICLES:            
            return articleList.slice( payload.from, payload.to );
    }
    
    return articles;
}