// src/pages/Home.js
import React from 'react';

const Home = () => {
  return (
    <>
      <section>
        <h1>Welcome to Our Photography and Videography Website</h1>
        <p>
          We specialize in capturing beautiful moments through photography and videography. 
          Whether it's weddings, events, or special occasions, we are here to make your memories last forever.
        </p>
      </section>
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Wedding Photography</li>
          <li>Event Photography</li>
          <li>Portrait Photography</li>
          <li>Commercial Videography</li>
          <li>...and more</li>
        </ul>
      </section>
      <section>
        <h2>Featured Work</h2>
        {/* Add your featured work (images, videos, etc.) here */}
      </section>
    </>
  );
};

export default Home;
