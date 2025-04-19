import React from 'react';
import loadingGif from '../assets/gif/loading-arrow.gif';

export default function Loading() {
  return (
    <div
      className="loading"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <h4 style={{ fontFamily: '"Dancing Script", cursive', fontSize: 30 }}>Loading...</h4>
      <img src={loadingGif} alt="Loading..." style={{ height: '50px', width: '50px' }} />
    </div>
  );
}
