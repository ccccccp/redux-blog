import {createStore,combineReducers,compose,applyMiddleware} from 'redux';
import ChunkMiddleWare from 'redux-chunk';
import FetchMiddleWare from './fetchMiddleWare.js';
import {createLogger} from 'redux-logger';
import reducer from './reducers.js';
// console.log(ChunkMiddleWare(),ChunkMiddleWare)
const middleWares = [
  applyMiddleware(FetchMiddleWare,createLogger())
]
if(window.__REDUX_DEVTOOLS_EXTENSION__){
  middleWares.push(window.__REDUX_DEVTOOLS_EXTENSION__());
}
const middleWare = compose(...middleWares);
const store = createStore(
  reducer,
  middleWare
);
export default store

