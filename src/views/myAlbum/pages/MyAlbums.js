import React from 'react';
import { useSelector } from 'react-redux';

const styles = {};

export default function MyAlbums() {
  const {
    fetchAlbumsIsLoading,
    albums,
    fetchAlbumsHasError,
    fetchPhotosIsLoading,
    photos,
    fetchPhotosHasError,
    sortBy,
  } = useSelector((state) => state.myAlbumsReducer);

  console.log(
    '--------------->',
    fetchAlbumsIsLoading,
    albums,
    fetchAlbumsHasError,
    fetchPhotosIsLoading,
    photos,
    fetchPhotosHasError,
    sortBy
  );

  return <div className="container">My Albums</div>;
}
