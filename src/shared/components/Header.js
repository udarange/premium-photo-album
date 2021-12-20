import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSortByAction } from '../../views/myAlbum/redux/actions/myAlbumsAction';

export default function Header() {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <header className="border-bottom">
      <div className="container d-flex flex-md-row flex-column justify-content-md-between align-items-md-center">
        <button type="button" className="btn p-0" onClick={() => history.push('/albums')}>
          <h1>My Albums</h1>
        </button>
        <div className="d-flex flex-row align-items-center mb-2">
          <p className="m-0 text-nowrap mr-2">Sort By:</p>
          <select
            className="custom-select custom-select-sm w-auto"
            defaultValue="title-a-z"
            onChange={(event) => dispatch(setSortByAction(event.target.value))}
          >
            <option value="title-a-z">Title (A-Z)</option>
            <option value="title-z-a">Title (Z-A)</option>
          </select>
        </div>
      </div>
    </header>
  );
}
