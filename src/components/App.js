import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from './Login.js';
import Player from './Player.js';
import { useStateValue } from '../StateProvider.js';
import { getTokenFromUrl } from '../spotifyConfig.js';

const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZEVXcJB9rSjvn6am').then(res =>
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: res,
        })
      );

      spotify.getMyTopArtists().then(res =>
        dispatch({
          type: 'SET_TOP_ARTISTS',
          top_artists: res,
        })
      );

      dispatch({
        type: 'SET_SPOTIFY',
        spotify: spotify,
      });
    }
  }, [dispatch]);

  return (
    <div className='app'>
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
