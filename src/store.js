import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { spawn } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';
import viewAlbumsSaga from './views/myAlbum/redux/sagas';
import myAlbumsReducer from './views/myAlbum/redux/reduce/myAlbumsReducer';

const rootReducer = combineReducers({
  myAlbumsReducer,
});

function* rootSaga() {
  yield spawn(viewAlbumsSaga);
}

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
