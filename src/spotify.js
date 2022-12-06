//  https://developer.spotify.com/
//  documentation/web-playback-sdk/quick-start/#

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-25ed1.web.app/";

const clientId = "8bd51ff0339048618a9e112de48c1dbd";

// my client id 8bd51ff0339048618a9e112de48c1dbd

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      // #accessToken=mysupersecretkey&name=sonny
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

// clever programming spotify client id
// 8765545b25344f0095aa282cbadd8093

//for better understanding reduec(initial,item) part

// let f=e.reduce((initial,item)=>{
//   console.log('initial '+initial);
//   console.log('item '+item);
// });
// VM1417:2 initial ttp://localhost:3000/#access_token=BQBJTKCYyj9E588GyeqK4QPW-v4qlXUySHSOq7wRJPAz45yghGCSHkHY40ZP2rEde3VPkJn3endHagyc2o3t8nDC0KxC7-66Gb3C8zIXP-jXYttTSxdqcXeH2oU-2DYyu-DPWjqRW_-BF75aAFWueBrH38MSn9A
// VM1417:3 item token_type=Bearer
// item expires_in=3600
//
// e
// (3) ['ttp://localhost:3000/#access_token=BQBJTKCYyj9E588…tTSxdqcXeH2oU-2DYyu-DPWjqRW_-BF75aAFWueBrH38MSn9A', 'token_type=Bearer', 'expires_in=3600']
