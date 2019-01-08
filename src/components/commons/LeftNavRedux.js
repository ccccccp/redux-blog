import createReducers from './createReducer.js';
const LOAD_NAV = Symbol("load-nav");
const LOAD_NAV_SUCCESS = Symbol("load-nav-success");
const LOAD_NAV_ERROR = Symbol("lload-nav-error");
const initialData = {
    loading: true,
    navData: [],
    error: false
}
export const loadNav = (params = {}) => {
    return {
        types: [LOAD_NAV, LOAD_NAV_SUCCESS, LOAD_NAV_ERROR],
        url: '/api/query/navs',
        params
    }
}
// export default (state = initialData, action) => {
//     switch (action.type) {
//         case LOAD_NAV:
//             return {
//                 ...state,
//                 loading: true,
//                 error: false
//             }
//         case LOAD_NAV_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 error: false,
//                 navData: action.payload.data
//             }
//         case LOAD_NAV_ERROR:
//             return {
//                 ...state,
//                 loading: false,
//                 error: true
//             }
//         default:
//             return state;
//     }
// }
export default createReducers(initialData, {
    [LOAD_NAV]: (state, action) => {
        return {
            ...state,
            loading: true,
            error: false
        }
    },
    [LOAD_NAV_SUCCESS]: (state, action) => {
        return {
            ...state,
            loading: false,
            error: false,
            navData: action.payload.data
        }
    },
    [LOAD_NAV_ERROR]: (state,action) => {
        return {
            ...state,
            loading: false,
            error: true
        }
    }
})