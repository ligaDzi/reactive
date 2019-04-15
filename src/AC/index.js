import { 
    LOAD_ALL_ARTICLES, 
    LOAD_FROM_TO_ARTICLES,
    SELECT_ARTICLE,
    CLOSE_ARTICLE,
    LOAD_MENU,
    TOGGLE_MENU,
    CHANGE_DESCRIPTION_MENU,
    LOAD_CONTACTUS,
    LOAD_ALL_CATEGORIES,
    CHANGE_SELECTED_CATEGORIES,
    TOGGLE_MENU_CATEGORIES,
    CLOSE_MENU_CATEGORIES,
    CURSOR_ENTER,
    CURSOR_LEAVE } from '../constants'

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

export function selectArticle(id) {
    // В дальнейшем, когда буду писать серверную часть,
    // здесь будет использоваться middlewares.
    // С загрузкой с сервера 2х статей: выбранной и следующей после неё.
    // Т.е. в reducer будет приходить не id а response с 2мя статьями.

    return (dispatch) => {
        dispatch({            
            type: CLOSE_MENU_CATEGORIES            
        });

        dispatch({            
            type: SELECT_ARTICLE,
            payload: { id }            
        });

    }
}

export function closeArticle() {
    return {
        type: CLOSE_ARTICLE
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

export function closeMenuCategor() {
    return {
        type: CLOSE_MENU_CATEGORIES
    }
}

export function enterCursor(text) {
    return {
        type: CURSOR_ENTER,
        payload: { text }
    }
}

export function leaveCursor() {
    return {
        type: CURSOR_LEAVE
    }
}