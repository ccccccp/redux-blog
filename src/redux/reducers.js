import {combineReducers} from 'redux';
import home from '@/views/HomeRedux.js';
import detail from '@/views/DetailRedux.js';
import nav from '@/components/commons/LeftNavRedux';
export default combineReducers({
    home,
    nav,
    detail
})