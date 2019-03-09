import {  contactUs as contactList } from '../fixtures'

import { LOAD_CONTACTUS } from '../constants'

export default ( contactUs = contactList, action ) => {

    const { type } = action;

    switch(type) {

        case LOAD_CONTACTUS:
            return contactUs;
    }
    return contactUs;
}