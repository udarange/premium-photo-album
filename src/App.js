import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ViewAlbums from './views/viewAlbums/pages/ViewAlbums';
import { fetchAlbumsAction, fetchPhotosAction } from './views/myAlbum/redux/actions/myAlbumsAction';
import MyAlbums from './views/myAlbum/pages/MyAlbums';
import Header from './shared/components/Header';
import Footer from './shared/components/Footer';

function App() {
  const dispatch = useDispatch();
  const { albums } = useSelector((state) => state.myAlbumsReducer);

  useEffect(() => {
    dispatch(fetchAlbumsAction());
  }, [dispatch]);

  useEffect(() => {
    if (albums.length > 0) {
      const albumIds = albums.map((el) => el.id);
      const uniqueAlbumIds = [...new Set(albumIds)];
      dispatch(fetchPhotosAction(uniqueAlbumIds));
    }
  }, [albums]);

  return (
    <div className="mt-4">
      <Router>
        <Header />
        <main className="mb-5 container">
          <Switch>
            <Route exact path="/albums" component={MyAlbums} />
            <Route exact path="/albums/:id" component={ViewAlbums} />
            <Route path="/">
              <Redirect to="/albums" />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
