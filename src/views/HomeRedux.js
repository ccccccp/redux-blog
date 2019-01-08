import {combineReducers} from 'redux';
import previewListReducer from '@/components/Home/PreviewRedux';
export default combineReducers({
    prevList:previewListReducer
});
export * as prevListActions from '@/components/Home/PreviewRedux';
