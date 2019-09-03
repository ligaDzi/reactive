import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import logger from '../middleware/logger'

const enhancer = applyMiddleware(thunk, api, logger);

const store = createStore( reducer, {}, enhancer );

export default store;