import { Record, OrderedMap } from 'immutable'
import { arrToMap } from '../helpers'
import { menu as menuList } from '../fixtures'
import { LOAD_MENU, TOGGLE_MENU, CHANGE_DESCRIPTION_MENU } from '../constants'

const MenuRecord = Record({    
    id: undefined,
    name: undefined,
    description: undefined,
    alias: undefined
});

const ReducerState = Record({
    isActive: false,
    description: undefined,
    entities: new OrderedMap({})
});

const defaultMenu = new ReducerState();

export default ( menu = defaultMenu, action ) => {

    const { type, payload } = action;

    switch(type) {

        case LOAD_MENU:
            return menu.set( 'entities', arrToMap(menuList, MenuRecord) );            

        case TOGGLE_MENU:      
            document.body.classList.toggle('body-overflow-hidden');      
            return menu.set( 'isActive', !menu.isActive );            

        case CHANGE_DESCRIPTION_MENU:
            return menu.set( 'description', menu.entities.get(payload.id).description );            
    }
    return menu;
}