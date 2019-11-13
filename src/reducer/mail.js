import { Record } from 'immutable'
import { SEND_MAIL, START, SUCCESS, FAIL } from '../constants'

const ReducerState = Record({
    isLoading: false,
    isSuccess: false,
    isError: false,
    email: undefined
});

const defaultState = new ReducerState();

export default ( mail = defaultState, action ) => {
    const { type, payload } = action;

    switch (type) {

        case SEND_MAIL + START:
            return mail.set('isLoading', true);

        case SEND_MAIL + SUCCESS:
            return mail
                    .set('email', payload.email)
                    .set('isLoading', false)
                    .set('isError', false)
                    .set('isSuccess', true);

        case SEND_MAIL + FAIL:
            console.error(payload.err); 
            return mail
                    .set('isLoading', false)
                    .set('isError', true)
                    .set('isSuccess', false);
    }
    return mail;
}