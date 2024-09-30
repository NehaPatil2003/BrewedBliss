import React from 'react';
import c2 from './img/c2.png';

export default function Coffee() {
  return (
    <div style={{
      position: 'relative', // Make this the container for absolute positioning
      width: '100%',
      top: '10%',
      height: '100%',
    }}>
      <img src={c2} className="img-fluid" alt="coffee" style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover', // Ensure the image covers the container
        display: 'block', // Ensure the image is displayed correctly
      }} />
      <div style={{
        position: 'absolute',
        top: '10%', // Adjust as needed
        left: '20%', // Adjust as needed
        color: 'white', // Change text color as needed for visibility
        zIndex: 1, // Ensure text is above the image
      }}>
        <h2 style={{
          fontSize: '5rem',
          margin: 0,
          textShadow: '2px 2px 4px #FFD700, 6px 6px 2px black'
        }}>
          Welcome To
        </h2>
        <h1 style={{
          fontSize: '5rem',
          margin: 0,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 4px 4px 4px #FFD700, 6px 6px 6px black'
        }}>
          BREWED BLISS CAFE
        </h1>
        <h4 style={{
          textShadow: '2px 2px 4px #FFD700, 2px 2px 1px black'
        }}>
          "Brewed to Perfection, Served with Passion"
        </h4>
      </div>
    </div>
  );
}
