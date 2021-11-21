import {
  FETCH_ALBUMS,
  FETCH_ALBUMS_SUCCESS,
  FETCH_ALBUMS_FAILURE,
  FETCH_PHOTOS,
  FETCH_PHOTOS_SUCCESS,
  FETCH_PHOTOS_FAILURE,
  SET_SORT_BY,
} from './actionType';

export function fetchAlbumsAction() {
  return {
    type: FETCH_ALBUMS,
  };
}

export function fetchAlbumsSuccessAction(albums) {
  return {
    type: FETCH_ALBUMS_SUCCESS,
    albums,
  };
}

export function fetchAlbumsFailureAction() {
  return {
    type: FETCH_ALBUMS_FAILURE,
  };
}

export function fetchPhotosAction(albumIds) {
  return {
    type: FETCH_PHOTOS,
    albumIds,
  };
}

export function fetchPhotosSuccessAction(photos) {
  return {
    type: FETCH_PHOTOS_SUCCESS,
    photos,
  };
}

export function fetchPhotosFailureAction() {
  return {
    type: FETCH_PHOTOS_FAILURE,
  };
}

export function setSortByAction(sortBy) {
  return {
    type: SET_SORT_BY,
    sortBy,
  };
}
