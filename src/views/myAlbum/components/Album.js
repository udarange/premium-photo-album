import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const styles = {
  card: { cursor: 'pointer' },
  subtitle: { fontSize: 13 },
};

export default function Album({ title, albumId }) {
  const history = useHistory();
  const { photos } = useSelector((state) => state.myAlbumsReducer);

  const thumbnails = photos.filter((el) => el.albumId === albumId);

  return (
    <div className="col-sm-6 p-1">
      <div
        className="card d-flex flex-column flex-sm-row p-2 align-items-center"
        onClick={() => history.push(`/albums/${albumId}`)}
        style={styles.card}
      >
        <img width={150} height={150} src={thumbnails[0]?.thumbnailUrl} alt={thumbnails[0]?.title} />
        <div className="d-flex flex-column align-items-center align-items-sm-start m-2">
          <h2 className="text-ellipsis mb-0">{title}</h2>
          <p className="m-0" style={styles.subtitle}>
            ({thumbnails.length || 'No'} pictures)
          </p>
        </div>
      </div>
    </div>
  );
}
