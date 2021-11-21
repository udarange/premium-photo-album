import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { PuffLoader } from 'react-spinners';
import Photo from '../components/Photo';

const styles = {
  loader: { minHeight: window.innerHeight * 0.8 },
  container: { paddingLeft: 15, paddingRight: 15 },
};

export default function ViewAlbums() {
  const { fetchAlbumsIsLoading, albums, fetchPhotosIsLoading, photos, sortBy } = useSelector(
    (state) => state.myAlbumsReducer
  );
  const { id: albumId } = useParams();

  const albumTitle = albums.find((el) => el.id.toString() === albumId)?.title;
  const albumPhotos = photos.filter((el) => el.albumId.toString() === albumId);

  if (fetchAlbumsIsLoading || fetchPhotosIsLoading) {
    return (
      <div className="d-flex w-100 justify-content-center align-items-center" style={styles.loader}>
        <PuffLoader size={50} color="#07456b" loading />
      </div>
    );
  }

  if (albumTitle === undefined) {
    return (
      <div className="d-flex w-100 justify-content-center align-items-center" style={styles.loader}>
        No Album found
      </div>
    );
  }

  return (
    <div className="mt-3">
      <h2 className="" style={{ fontSize: 23 }}>
        {albumTitle}
      </h2>
      <div className="row" style={styles.container}>
        {albumPhotos
          .sort((a, b) => {
            if (sortBy === 'title-z-a') {
              return b.title.localeCompare(a.title);
            }
            return a.title.localeCompare(b.title);
          })
          .map((el) => (
            <Photo key={el.id} title={el.title} url={el.url} />
          ))}
      </div>
    </div>
  );
}
