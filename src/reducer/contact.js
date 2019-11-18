import { LOAD_CONTACTUS, START, SUCCESS, FAIL } from '../constants'
import { arrToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const ContactRecord = Record({
    id: undefined,    
    title: undefined,
    adress: undefined,
    email: undefined,
    phone: undefined
});

const ReducerState = Record({
    isLoading: false,
    isLoaded: false,
    isError: false,
    entities: new OrderedMap({})
})

const defaultContacUs = new ReducerState();

export default ( contactUs = defaultContacUs, action ) => {

    const { type, response } = action;

    switch(type) {

        case LOAD_CONTACTUS + START:
            return contactUs.set('isLoading', true);
            
        case LOAD_CONTACTUS + SUCCESS:            
            return contactUs
                .update('entities', entities => arrToMap(response, ContactRecord).merge(entities))
                .set('isLoading', false)
                .set('isLoaded', true)
                .set('isError', false);
            
        case LOAD_CONTACTUS + FAIL:
            return contactUs
                .set('isLoading', false)
                .set('isLoaded', false)
                .set('isError', true);
    }
    return contactUs;
}