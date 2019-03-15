import { 
    LOAD_ALL_ARTICLES, 
    LOAD_FROM_TO_ARTICLES,
    LOAD_MENU,
    TOGGLE_MENU,
    CHANGE_DESCRIPTION_MENU,
    LOAD_CONTACTUS,
    LOAD_ALL_CATEGORIES,
    CHANGE_SELECTED_CATEGORIES,
    TOGGLE_MENU_CATEGORIES } from '../constants'

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

export function loadMenu() {
    return {
        type: LOAD_MENU
    }
}

export function toggleMenu() {    
    return {
        type: TOGGLE_MENU
    }
}

export function changeDescMenu(id) {    
    return {
        type: CHANGE_DESCRIPTION_MENU,
        payload: { id }
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

export function changeSelectedCategor(id) {
    return {
        type: CHANGE_SELECTED_CATEGORIES,
        payload: { id }
    }
}

export function toggleMenuCategor() {
    return {
        type: TOGGLE_MENU_CATEGORIES
    }
}