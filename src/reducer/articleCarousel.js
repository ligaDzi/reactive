import { articles as articleList } from '../fixtures'

import { LOAD_ARTICLES_CAROUSEL } from '../constants'

export default ( articleCarousel = articleList, action ) => {

    const { type } = action;

    switch(type) {

        case LOAD_ARTICLES_CAROUSEL:
            return articleCarousel.slice(0, 5);
    }
    return articleCarousel;
}