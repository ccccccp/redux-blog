import {combineReducers} from 'redux';
import DetailReducers from '@/components/Detail/DetailRedux.js';
export default combineReducers({
    detailData:DetailReducers
});
export * as detailDataAction from '@/components/Detail/DetailRedux.js'