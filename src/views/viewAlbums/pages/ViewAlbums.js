import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const styles = {};

export default function ViewAlbums() {
  const {
    fetchAlbumsIsLoading,
    albums,
    fetchAlbumsHasError,
    fetchPhotosIsLoading,
    photos,
    fetchPhotosHasError,
    sortBy,
  } = useSelector((state) => state.myAlbumsReducer);
  const { id } = useParams();

  console.log('+++++++++++', id);

  return (
    <div className="container p-0" style={{}}>
      viewAlbums
    </div>
  );
}
