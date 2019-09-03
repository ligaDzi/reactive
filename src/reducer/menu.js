import { Record, OrderedMap } from 'immutable'
import { arrToMap } from '../helpers'
import { menu as menuList } from '../fixtures'
import { LOAD_MENU, TOGGLE_MENU, CHANGE_DESCRIPTION_MENU, START, SUCCESS, FAIL } from '../constants'

const MenuRecord = Record({    
    id: undefined,
    name: undefined,
    description: undefined,
    alias: undefined
});

const ReducerState = Record({
    isActive: false,
    description: undefined,
    isLoading: false,
    isLoaded: false,
    isError: false,
    entities: new OrderedMap({})
});

const defaultMenu = new ReducerState();

export default ( menu = defaultMenu, action ) => {

    const { type, payload, response } = action;

    switch(type) {

        case LOAD_MENU + START:
            return menu.set('isLoading', true);

        case LOAD_MENU + SUCCESS:
            return menu
                .update('entities', entities => arrToMap(response, MenuRecord).merge(entities))
                .set('isLoading', false)
                .set('isLoaded', true)
                .set('isError', false); 
            
        case LOAD_MENU + FAIL:
            return menu            
                .set('isLoading', false)
                .set('isLoaded', false)
                .set('isError', true);

        case TOGGLE_MENU:      
            document.body.classList.toggle('body-overflow-hidden');      
            return menu.set( 'isActive', !menu.isActive );            

        case CHANGE_DESCRIPTION_MENU:
            return menu.set( 'description', menu.entities.get(payload.id).description );            
    }
    return menu;
}