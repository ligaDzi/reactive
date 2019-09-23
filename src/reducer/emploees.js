import {
    LOAD_ALL_EMPLOEES,
    START,
    SUCCESS,
    FAIL
} from '../constants'

import { arrToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const EmploeeRecord = Record({
    id: undefined,
    name: undefined,
    surname: undefined,
    position: undefined,
    photo: undefined,
    isManager: false
});

const ReducerState = Record({
    isLoading: false,
    isLoaded: false,
    isError: false,
    entities: new OrderedMap({})
});

const defaultEmploee = new ReducerState();

export default ( emploees = defaultEmploee, action ) => {

    const { type, response } = action;

    switch(type) {
        case LOAD_ALL_EMPLOEES + START:
            return emploees.set('isLoading', true);

        case LOAD_ALL_EMPLOEES + SUCCESS:
            return emploees
                .update('entities', entities => arrToMap(response, EmploeeRecord).merge(entities))
                .set('isLoading', false)
                .set('isLoaded', true)
                .set('isError', false);

        case LOAD_ALL_EMPLOEES + FAIL:
            return emploees
                .set('isLoading', false)
                .set('isLoaded', false)
                .set('isError', true);
    } 
    return emploees;
}