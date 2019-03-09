import { combineReducers } from 'redux'
import articlesReducer from './articles'
import articleCrslReducer from './articleCarousel'
import menuReducer from './menu'
import contactReduser from './contact'
import categorieReducer from './categories'

export default combineReducers({
    articles: articlesReducer,
    articleCarousel: articleCrslReducer,
    menu: menuReducer,
    contactUs: contactReduser,
    categories: categorieReducer
})