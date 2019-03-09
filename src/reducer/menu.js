import { menu as menuList } from '../fixtures'

import { LOAD_MENU } from '../constants'

export default ( menu = menuList, action ) => {

    const { type } = action;

    switch(type) {

        case LOAD_MENU:
            return menu;
    }
    return menu;
}