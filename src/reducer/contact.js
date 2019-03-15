import {  contactUs as contactList } from '../fixtures'
import { LOAD_CONTACTUS } from '../constants'
import { arrToMap } from '../helpers'
import { Record, OrderedMap } from 'immutable'

const ContactRecord = Record({
    id: undefined,    
    title: undefined,
    adress: undefined,
    email: undefined,
    phone: undefined
});

const defaultContacUs = new OrderedMap({});

export default ( contactUs = defaultContacUs, action ) => {

    const { type } = action;

    switch(type) {

        case LOAD_CONTACTUS:            
            return contactUs = arrToMap(contactList, ContactRecord);
    }
    return contactUs;
}