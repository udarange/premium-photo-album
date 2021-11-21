import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchPhotosFailureAction, fetchPhotosSuccessAction } from '../actions/myAlbumsAction';

function fetchPhotosFromApi(albumIds) {
  const query = albumIds.map((el) => `albumId=${el}`).join('&');

  return axios
    .get(`${process.env.REACT_APP_FETCH_PHOTOS}?${query}`)
    .then((response) => response.data)
    .catch((error) => error);
}

export default function* callPhotos(actions) {
  try {
    const photos = yield call(fetchPhotosFromApi, actions.albumIds);
    yield put(fetchPhotosSuccessAction(photos));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e.toString());
    yield put(fetchPhotosFailureAction());
  }
}
