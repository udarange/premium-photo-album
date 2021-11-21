import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ViewAlbums from './views/viewAlbums/pages/ViewAlbums';
import { fetchAlbumsAction, fetchPhotosAction, setSortByAction } from './views/myAlbum/redux/actions/myAlbumsAction';
import MyAlbums from './views/myAlbum/pages/MyAlbums';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlbumsAction());
    dispatch(fetchPhotosAction());
  }, [dispatch]);

  return (
    <div className="mt-4">
      <Header />
      <main className="mb-5 container">
        <Router>
          <Switch>
            <Route exact path="/albums" component={MyAlbums} />
            <Route exact path="/albums/:id" component={ViewAlbums} />
            <Route path="/">
              <Redirect to="/albums" />
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
