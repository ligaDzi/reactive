import { categories as List } from '../fixtures'

import { 
    LOAD_ALL_CATEGORIES,
    CHANGE_SELECTED_CATEGORIES } from '../constants'

const categorieList = {
    all: List,
    selected: []
}

export default ( categories = categorieList, action ) => {

    const { type, payload } = action;

    switch(type) {
        case LOAD_ALL_CATEGORIES:
            return categories;

        case CHANGE_SELECTED_CATEGORIES: 
            if(!payload.id){                
                return {...categories, selected: [] };
            }

            const tmpState = {...categories}
            const id = tmpState.selected.indexOf(payload.id);

            if( id !== -1 ){                
                tmpState.selected.splice(id, 1);                
            } else {
                tmpState.selected.push(payload.id);
            }
            return tmpState;
    }
    return categories;
}