import React from 'react';
import Body from './Body.js';
import Sidebar from './Sidebar.js';
import Footer from './Footer.js';
import '../styles/Player.css';

function Player({ spotify }) {
  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer spotify={spotify} />
    </div>
  );
}

export default Player;
