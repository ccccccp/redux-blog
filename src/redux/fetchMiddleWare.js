import fetchGet from '@/utils/fetchGet.js';
export default store => next => action => {
    if (!action.url || !Array.isArray(action.types)) {
        return next(action);
    }
    const [LOADING, SUCCESS, ERROR] = action.types;
    next({
        type: LOADING,
        loading: true,
        ...action
    });
    fetchGet(action.url, {...action.params })
        .then(payload => {
            next({
                type: SUCCESS,
                loading: false,
                payload
            })
        }
        ).catch(error => {
            next({
                type: ERROR,
                loading: false,
                error
            })
        })
}