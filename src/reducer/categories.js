import { Record, OrderedMap } from 'immutable'
import { arrToMap } from '../helpers'
import history from '../history'
import { 
    LOAD_ALL_CATEGORIES,
    CHANGE_SELECTED_CATEGORIES,
    TOGGLE_MENU_CATEGORIES,
    CLOSE_MENU_CATEGORIES,
    HIDDEN_MENU_CATEGORIES,
    VISIBLE_MENU_CATEGORIES,
    START,
    SUCCESS,
    FAIL } from '../constants'

 
const getKey = () => {
    return Date.now() + Math.random();
}

const CategoriesRecord = Record({
    id: undefined,
    name: undefined
})

const ReducerState = Record({
    isLoading: false,
    isLoaded: false,
    isError: false,
    entities: new OrderedMap({}),
    selected: [],
    isActive: false,
    isHidden: false,
    keyArchivePg: getKey()
});

const defaultCategories = new ReducerState();



export default ( categories = defaultCategories, action ) => {

    const { type, payload, response } = action;

    switch(type) {
        case LOAD_ALL_CATEGORIES + START:
            return categories.set('isLoading', true);

        case LOAD_ALL_CATEGORIES + SUCCESS:
            return categories
                .update('entities', entities => arrToMap(response, CategoriesRecord).merge(entities))
                .set('isLoading', false)
                .set('isLoaded', true)
                .set('isError', false); 

        case LOAD_ALL_CATEGORIES + FAIL:
            return categories            
                .set('isLoading', false)
                .set('isLoaded', false)
                .set('isError', true); 
        
        case HIDDEN_MENU_CATEGORIES:
            return categories.set('isHidden', true);

        case VISIBLE_MENU_CATEGORIES:
            return categories.set('isHidden', false);

        case TOGGLE_MENU_CATEGORIES:
            return categories.set( 'isActive', !categories.isActive );

        case CLOSE_MENU_CATEGORIES:
            return categories.set( 'isActive', false );

        case CHANGE_SELECTED_CATEGORIES:         
            //Если пользователь находиться на страницы Архива статей, 
            //то при выборе категорий надо перерисовывать полностью страницу ArchivePage.
            //Связанно это с тем, что при изменении кол-ва статей должно меняться время обнуления скролла
            const updateKeyArchPg = () => {
                if(history.location.pathname == '/archive') {
                    return getKey();                        
                } else {
                    return categories.keyArchivePg;
                }
            }

            if(!payload.id){                
                return categories
                        .set( 'selected', [] )
                        .set('keyArchivePg', updateKeyArchPg());
            } 

            const indexId = categories.selected.indexOf(payload.id);            

            if( indexId !== -1 ){                                
                return categories
                        .update('selected', selected => selected.filter( id => id !== payload.id ))
                        .set('keyArchivePg', updateKeyArchPg())
                               
            } else {
                return categories
                        .update('selected', selected => selected.concat(payload.id))
                        .set('keyArchivePg', updateKeyArchPg())
                
            }

            
    }
    return categories;
}