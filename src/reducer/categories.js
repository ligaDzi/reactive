import { categories as categorieList } from '../fixtures'

import { LOAD_ALL_CATEGORIES } from '../constants'

export default ( categories = categorieList, action ) => {

    const { type } = action;

    switch(type) {
        case LOAD_ALL_CATEGORIES:
            return categories;
    }
    return categories;
}