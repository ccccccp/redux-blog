import {combineReducers} from 'redux';
import previewListReducer from '@/components/Preview/PreviewRedux';
import * as prevListActions from '@/components/Preview/PreviewRedux';

export default combineReducers({
    prevList:previewListReducer
});
export {
    prevListActions
}