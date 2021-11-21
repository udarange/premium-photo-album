import {
  FETCH_ALBUMS,
  FETCH_ALBUMS_FAILURE,
  FETCH_ALBUMS_SUCCESS,
  FETCH_PHOTOS,
  FETCH_PHOTOS_FAILURE,
  FETCH_PHOTOS_SUCCESS,
  SET_SORT_BY,
} from '../actions/actionType';

const initialState = {
  fetchAlbumsIsLoading: true,
  albums: [],
  fetchAlbumsHasError: false,
  fetchPhotosIsLoading: true,
  photos: [],
  fetchPhotosHasError: false,
  sortBy: 'title-a-z',
};

export default function myAlbumsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALBUMS:
      return {
        ...state,
        fetchAlbumsIsLoading: true,
        fetchAlbumsHasError: false,
      };
    case FETCH_ALBUMS_SUCCESS:
      return {
        ...state,
        fetchAlbumsIsLoading: false,
        albums: action.albums,
        fetchAlbumsHasError: false,
      };
    case FETCH_ALBUMS_FAILURE:
      return {
        ...state,
        fetchAlbumsIsLoading: false,
        fetchAlbumsHasError: true,
      };
    case FETCH_PHOTOS:
      return {
        ...state,
        fetchPhotosIsLoading: true,
        fetchPhotosHasError: false,
      };
    case FETCH_PHOTOS_SUCCESS:
      return {
        ...state,
        fetchPhotosIsLoading: false,
        photos: action.photos,
        fetchPhotosHasError: false,
      };
    case FETCH_PHOTOS_FAILURE:
      return {
        ...state,
        fetchPhotosIsLoading: false,
        fetchPhotosHasError: true,
      };
    case SET_SORT_BY:
      return {
        ...state,
        sortBy: action.sortBy,
      };
    default:
      return state;
  }
}
