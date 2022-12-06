import React, { useEffect, useState } from "react";
import Login from "./Login";
import "./App.css";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();


function App() {
  const [{ user, token }, dispatch] = useDataLayerValue();
  const [userId, setuserId] = useState('')

  // run code based on a given condition
  useEffect(() => {
    // code ....
    const hash = getTokenFromUrl();
    window.location.hash = ""; //to strip the url
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      console.log('token',_token)

      spotify.getMe().then((user) => {
        console.log('User:',user)
        setuserId(user.id)
        console.log('user playlists',user.id)
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      
      // get the user account . give a  promise to the user

      spotify.getUserPlaylists(userId)
      .then((playlists) =>{
        console.log('playlist: ',playlists.items)
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      }).catch((err) => console.log("playlist err", err));

     

      

      spotify.getPlaylist('3gEypZEKKo22xzLJn2uBc7').then(response => 
        
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
        
        );
    }

    //console.log("I have a Token 👉 ", token);
  }, []);

  //console.log("🧍 ", user);
  //console.log("🚀 ", token);

  return (
    <div className="App">
      {/* <h1>We building a Spotify Clone 🚀 !!!</h1> */}

      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
