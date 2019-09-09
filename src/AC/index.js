import { mapToArr } from '../helpers'
import { 
    LOAD_ALL_ARTICLES,
    LOAD_SLIDER_ARTICLES, 
    LOAD_FROM_TO_ARTICLES,
    SELECT_ARTICLE,
    UPDATE_ALL_ARTICLES,
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
    CURSOR_LEAVE, 
    START,
    SUCCESS,
    FAIL} from '../constants'

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES
    }
}

export function loadSliderArticles() {
    return {
        type: LOAD_SLIDER_ARTICLES,
        callApi: '/api/article/slider'
    }
}

export function loadArticlesFromTo() {
    return (dispatch, getState) => {
        const { categories } = getState();
        
        dispatch({
            type: LOAD_FROM_TO_ARTICLES + START
        });

        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: 0,
                selectCategories: categories.selected
            })
        }

        fetch('/api/article/fromto', option)
            .then(res => {                
                if(res.status >= 400) {                    
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then(response => {
                dispatch({
                    type: LOAD_FROM_TO_ARTICLES + SUCCESS,
                    response 
                })
            })
            .catch(err => dispatch({ 
                type: LOAD_FROM_TO_ARTICLES + FAIL, 
                payload: { err }
            }))
    }
}

export function selectArticle(id) {
    return (dispatch, getState) => {
        dispatch({            
            type: CLOSE_MENU_CATEGORIES            
        });

        dispatch({            
            type: SELECT_ARTICLE + START,
            payload: { id }            
        });

        const { articles, categories } = getState();
        const slider = mapToArr(articles.slider.entities);
        const allArticles = mapToArr(articles.all.entities);

        let artFocus = null;
        let artNext = null;

        artFocus = slider.filter(art => art.id === id);        

        if(artFocus[0]){   //СТАТЬЯ ИЗ СЛАЙДЕРА
            dispatch({
                type: SELECT_ARTICLE + SUCCESS,
                payload: {
                    artFocus: artFocus[0],
                    artNext
                }
            });
        }else{  //СТАТЬИ НЕ ИЗ СЛАЙДЕРА
            
            allArticles.forEach((article, i, artList) => {

                if(article.id === id){

                    if( (i + 1) === artList.length ){   //ПОСЛЕДНЯЯ СТАТЬЯ В СПИСКЕ
                        const option = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                from: (i + 1),
                                selectCategories: categories.selected
                            })
                        }

                        fetch('/api/article/fromto', option)
                            .then(res => {                
                                if(res.status >= 400) {                    
                                    throw new Error(res.statusText);
                                }
                                return res.json();
                            })
                            .then(response => {
                                dispatch({
                                    type: SELECT_ARTICLE + SUCCESS,
                                    payload: {
                                        artFocus: article,
                                        artNext: response[0] ? response[0] : null
                                    }
                                });

                                if(response[0]){
                                    dispatch({
                                        type: UPDATE_ALL_ARTICLES,
                                        payload: {
                                            newArticles: response
                                        }
                                    });
                                }
                            })
                            .catch(err => dispatch({ 
                                type: SELECT_ARTICLE + FAIL, 
                                payload: { err }
                            }));                        
                    }else if( (i + 2) === artList.length ){   //ПРЕД ПОСЛЕДНЯЯ СТАТЬЯ В СПИСКЕ
                        dispatch({
                            type: SELECT_ARTICLE + SUCCESS,
                            payload: {
                                artFocus: article,
                                artNext: artList[i+1]
                            }
                        });

                        const option = {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                from: (i + 2),
                                selectCategories: categories.selected
                            })
                        }       
                        
                        fetch('/api/article/fromto', option)
                            .then(res => {                
                                if(res.status >= 400) {                    
                                    throw new Error(res.statusText);
                                }
                                return res.json();
                            })
                            .then(response => {
                                if(response[0]){
                                    dispatch({
                                        type: UPDATE_ALL_ARTICLES,
                                        payload: {
                                            newArticles: response
                                        }
                                    });
                                }
                            })
                            .catch(err => dispatch({ 
                                type: SELECT_ARTICLE + FAIL, 
                                payload: { err }
                            }));                  
                    }else{
                        dispatch({
                            type: SELECT_ARTICLE + SUCCESS,
                            payload: {
                                artFocus: article,
                                artNext: artList[i+1]
                            }
                        });
                    }
                }
            })
        }        
    }
}

export function closeArticle() {
    return {
        type: CLOSE_ARTICLE
    }
}

export function loadMenu() {
    return {
        type: LOAD_MENU,
        callApi: '/api/menu/all'
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
        type: LOAD_CONTACTUS,
        callApi: '/api/contact/all'
    }
}

export function loadAllCategories() {
    return {
        type: LOAD_ALL_CATEGORIES,
        callApi: '/api/categorie/all'
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