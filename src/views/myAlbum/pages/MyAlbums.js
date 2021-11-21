import React from 'react';
import { useSelector } from 'react-redux';
import { PuffLoader } from 'react-spinners';
import Album from '../components/Album';

const styles = {
  loader: { minHeight: window.innerHeight * 0.8 },
  container: { paddingLeft: 11, paddingRight: 11 },
};

export default function MyAlbums() {
  const { fetchAlbumsIsLoading, fetchPhotosIsLoading, albums, sortBy } = useSelector((state) => state.myAlbumsReducer);

  if (fetchAlbumsIsLoading || fetchPhotosIsLoading) {
    return (
      <div className="d-flex w-100 justify-content-center align-items-center" style={styles.loader}>
        <PuffLoader size={50} color="#07456b" loading />
      </div>
    );
  }

  return (
    <div className="mt-3 row" style={styles.container}>
      {albums
        .sort((a, b) => {
          if (sortBy === 'title-z-a') {
            return b.title.localeCompare(a.title);
          }
          return a.title.localeCompare(b.title);
        })
        .map((el) => (
          <Album key={el.id} title={el.title} albumId={el.id} />
        ))}
    </div>
  );
}
