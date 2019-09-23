import { combineReducers } from 'redux'
import articlesReducer from './articles'
import menuReducer from './menu'
import contactReduser from './contact'
import categorieReducer from './categories'
import cursorReducer from './cursor'
import emploeeReducer from './emploees'

export default combineReducers({
    articles: articlesReducer,
    menu: menuReducer,
    contactUs: contactReduser,
    categories: categorieReducer,
    cursor: cursorReducer,
    emploees: emploeeReducer
})