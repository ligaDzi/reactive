import { START, SUCCESS, FAIL } from '../constants'

export default store => next => action => {

    const { callApi, type, ...rest } = action;
    console.log('Store:', store.getState().articles);
    

    if(!callApi){
        next(action);
    } else{
                        
        next({
            ...rest,
            type: type + START
        });

        setTimeout(() => {
            fetch(callApi)
                .then( res => {
                    if(res.status >= 400) {
                        throw new Error(res.statusText);
                    }
                    return res.json();
                })
                .then(response => next({...rest, type: type + SUCCESS, response}))
                .catch(error => next({...rest, type: type + FAIL, error}))
        }, 5000)
            
        // fetch(callApi)
        //     .then( res => {
        //         if(res.status >= 400) {
        //             throw new Error(res.statusText);
        //         }
        //         return res.json();
        //     })
        //     .then(response => next({...rest, type: type + SUCCESS, response}))
        //     .catch(error => next({...rest, type: type + FAIL, error}))
    }
}