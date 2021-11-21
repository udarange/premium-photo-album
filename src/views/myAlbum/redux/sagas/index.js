import { takeEvery } from 'redux-saga/effects';
import callAlbums from './callAlbums';
import { FETCH_ALBUMS, FETCH_PHOTOS } from '../actions/actionType';
import callPhotos from './callPhotos';

export default function* viewAlbumsSaga() {
  yield takeEvery(FETCH_ALBUMS, callAlbums);
  yield takeEvery(FETCH_PHOTOS, callPhotos);
}
