import { combineReducers } from 'redux'
import articlesReducer from './articles'
import menuReducer from './menu'
import contactReduser from './contact'
import categorieReducer from './categories'

export default combineReducers({
    articles: articlesReducer,
    menu: menuReducer,
    contactUs: contactReduser,
    categories: categorieReducer
})