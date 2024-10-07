// App.js
// import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'

const Home = () => (
  <>
    <div className="App">
      <Header />
      <div className="main-content">
        <div className="text-content">
          <h1 className="trip-head">Travel. Relax. Memories.</h1>
          <p className="trip-para">
            With travel trip you can experience new travel and the best tourist
            destinations.
          </p>
          <Link to="/user-details">
            <button className="book-btn">Book a New Trip</button>
          </Link>
        </div>
        <div className="image-content">
          <img
            src="https://res.cloudinary.com/ddoxcq1ju/image/upload/v1727936452/image_5_1_skqqfm.png" // Replace this with the actual image URL
            alt="Traveler"
            className="traveler-img"
          />
        </div>
      </div>
    </div>
    <div className="trip-container">
      <img src="https://res.cloudinary.com/ddoxcq1ju/image/upload/v1727449266/image_5_q88ook.png" />
      <h1 className="trip-heading">Travel.Relax.Memories.</h1>
      <p className="trip-para">
        With travel trip you can experience new travel and the best tourist
        destinations.
      </p>
      <Link to="/user-details">
        <button className="trip-button">Book a New Trip</button>
      </Link>
      <Footer />
    </div>
  </>
)

export default Home

// App.css
