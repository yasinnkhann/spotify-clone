import React from 'react';
import { loginUrl } from '../spotifyConfig.js';
import '../styles/Login.css';

function Login() {
  return (
    <div className='login'>
      <img
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt=''
      />
      <a href={loginUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
