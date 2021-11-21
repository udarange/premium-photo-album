import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchAlbumsFailureAction, fetchAlbumsSuccessAction } from '../actions/myAlbumsAction';

function fetchAlbumsFromApi() {
  return axios
    .get(process.env.REACT_APP_FETCH_ALBUMS)
    .then((response) => response.data)
    .catch((error) => error);
}

export default function* callAlbums() {
  try {
    const albums = yield call(fetchAlbumsFromApi);
    yield put(fetchAlbumsSuccessAction(albums));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e.toString());
    yield put(fetchAlbumsFailureAction());
  }
}
