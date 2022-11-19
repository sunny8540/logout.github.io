import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <>
   <Auth0Provider
    domain="dev-0epeeaac1laq5xcj.us.auth0.com"
    clientId="hfuP2FRMQDxD9aoaLDaX45HCZKXdl91C"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
    
  </>,document.querySelector("#root")
);