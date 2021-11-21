import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchPhotosFailureAction, fetchPhotosSuccessAction } from '../actions/myAlbumsAction';

function fetchPhotosFromApi() {
  return axios
    .get(process.env.REACT_APP_FETCH_PHOTOS)
    .then((response) => response.data)
    .catch((error) => error);
}

export default function* callPhotos() {
  try {
    const photos = yield call(fetchPhotosFromApi);
    yield put(fetchPhotosSuccessAction(photos));
  } catch (e) {
    console.error(e.toString());
    yield put(fetchPhotosFailureAction());
  }
}
