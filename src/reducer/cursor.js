import { 
    CURSOR_ENTER,
    CURSOR_LEAVE } from '../constants'

import { arrToMap } from '../helpers'
import { Record } from 'immutable'

const CursorReducerState = Record({
    isHover: false,
    text: ''
})

const defaultCursor = new CursorReducerState();

export default (cursor = defaultCursor, action) => {

    const { type, payload } = action;

    switch(type) {
        case CURSOR_ENTER:
            return cursor
                    .set('isHover', true)
                    .set('text', payload.text);

        case CURSOR_LEAVE:
            return cursor
                    .set('isHover', false)
                    .set('text', '');
    }

    return cursor
}