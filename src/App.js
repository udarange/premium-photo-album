import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ViewAlbums from './views/viewAlbums/pages/ViewAlbums';
import { fetchAlbumsAction, fetchPhotosAction, setSortByAction } from './views/myAlbum/redux/actions/myAlbumsAction';
import MyAlbums from './views/myAlbum/pages/MyAlbums';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbumsAction());
    dispatch(fetchPhotosAction());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <header>
        <h1>My Albums</h1>
        <div>
          <p>Sort By:</p>
          <div className="dropdown">
            <button
              className="btn btn-sm dropdown-toggle ml-2"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <button type="button" className="dropdown-item" onClick={() => dispatch(setSortByAction('title-a-z'))}>
                Title (A-Z)
              </button>
              <button type="button" className="dropdown-item" onClick={() => dispatch(setSortByAction('title-z-a'))}>
                Title (Z-A)
              </button>
            </div>
          </div>
        </div>
      </header>
      <Router>
        <Switch>
          <Route exact path="/albums" component={MyAlbums} />
          <Route exact path="/albums/:id" component={ViewAlbums} />
          <Route path="/">
            <Redirect to="/albums" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
