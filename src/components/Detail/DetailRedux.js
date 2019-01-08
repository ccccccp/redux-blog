const LOAD_DETAIL = Symbol("load-detail");
const LOAD_DETAIL_SUCCESS = Symbol("load-detail-success");
const LOAD_DETAIL_ERROR = Symbol("load-detail-error");
const initialState = {
    detailData: {
        detailTitle: '',
        detailTime: '',
        readNumber: '',
        detailContent: "",
    },
    loading: true,
    error: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DETAIL:
            return {
                ...state,
                loading: true
            }
        case LOAD_DETAIL_SUCCESS:
            return {
                ...state,
                detailData: action.payload.data,
                loading: false,
                error: false
            }
        case LOAD_DETAIL_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }
            default:
            return state;
    }
}
export const loadDetail = (params = {}) => {
    return {
        types: [LOAD_DETAIL, LOAD_DETAIL_SUCCESS, LOAD_DETAIL_ERROR],
        url: '/api/query/detail',
        params
    }
}