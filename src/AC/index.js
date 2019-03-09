import { 
    LOAD_ALL_ARTICLES, 
    LOAD_FROM_TO_ARTICLES,
    LOAD_ARTICLES_CAROUSEL,
    LOAD_MENU,
    LOAD_CONTACTUS,
    LOAD_ALL_CATEGORIES } from '../constants'

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES
    }
}

export function loadArticlesFromTo(from, to) {
    return {
        type: LOAD_FROM_TO_ARTICLES,
        payload: { from, to }
    }
}

export function loadArticleCarousel() {
    return {
        type: LOAD_ARTICLES_CAROUSEL
    }
}

export function loadMenu() {
    return {
        type: LOAD_MENU
    }
}

export function loadContactUs() {
    return {
        type: LOAD_CONTACTUS
    }
}

export function loadAllCategories() {
    return {
        type: LOAD_ALL_CATEGORIES
    }
}