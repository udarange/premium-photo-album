import React from 'react';

export default function Photo({ url, title }) {
  return (
    <div className="card col-md-3 col-sm-4 col-6 p-1">
      <img src={url} alt={title} />
    </div>
  );
}
