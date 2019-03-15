import { Record, OrderedMap } from 'immutable'
import { arrToMap } from '../helpers'
import { categories as List } from '../fixtures'
import { 
    LOAD_ALL_CATEGORIES,
    CHANGE_SELECTED_CATEGORIES,
    TOGGLE_MENU_CATEGORIES } from '../constants'

    
const CategoriesRecord = Record({
    id: undefined,
    name: undefined
})

const ReducerState = Record({
    all: new OrderedMap({}),
    selected: [],
    isActive: false
});

const defaultCategories = new ReducerState();


export default ( categories = defaultCategories, action ) => {

    const { type, payload } = action;

    switch(type) {
        case LOAD_ALL_CATEGORIES:
            return categories.set( 'all', arrToMap(List, CategoriesRecord) );

        case TOGGLE_MENU_CATEGORIES:
            return categories.set( 'isActive', !categories.isActive );

        case CHANGE_SELECTED_CATEGORIES: 
            if(!payload.id){                
                return categories.set( 'selected', [] );
            }

            const indexId = categories.selected.indexOf(payload.id);            

            if( indexId !== -1 ){                                
                return categories.update(
                    'selected',
                    selected => selected.filter( id => id !== payload.id )
                )               
            } else {
                return categories.update(
                    'selected', 
                    selected => selected.concat(payload.id)
                )
            }
    }
    return categories;
}