import React from 'react';
import Bg from './img/Bg4.png';

export default function About() {
  return (
    <>
      <div className="container">
        <div style={{
          position: 'relative', // Make this the container for absolute positioning
          width: '100%',
          top: '10%',
          height: '100%',
        }}>
          <img src={Bg} alt="Bg" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block', // Ensure image is displayed correctly
          }} />
          <div style={{
            position: 'absolute',
            top: '45%', // Adjust as needed
            left: '10%', // Adjust as needed
            color: 'black', // Change text color as needed for visibility
            zIndex: 1, // Ensure text is above the image
          }}>
            <h2 style={{
              fontSize: '5rem',
              margin: 0,
              textShadow: '2px 2px 4px #FFD700, 6px 6px 2px black',
            }} className="card-title">About Us :</h2>
            <p style={{
              fontSize: '2rem',
              margin: 0,
              textShadow: '2px 2px 4px #FFD700',
            }} className="card-text">
              Welcome You ..<br />
              Welcome to Brewed Bliss Café, where each cup is crafted with passion and perfection. Our mission is to create a serene and inviting atmosphere where you can savor the finest coffee and indulge in delightful treats. At Brewed Bliss, we believe in quality, community, and sustainability, ensuring every sip and bite not only satisfies but also supports local farmers and the environment. Join us for a journey of taste and tranquility, and experience the true essence of brewed bliss.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
