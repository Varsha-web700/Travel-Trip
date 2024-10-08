import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import Footer from '../Footer'

const MyTrips = () => {
  const renderEmptyView = () => {
    return (
      <>
        <div className="large-devices-view">
          <Header />
          <div className="mytrip-card">
            <img
              className="image"
              src="https://res.cloudinary.com/ddoxcq1ju/image/upload/v1728405263/Vector_ll7ymz.png"
              alt="empty-trips-view"
            />
            <h1 className="heading">No upcoming trips.</h1>
            <p className="paragraph">
              When you book a trip, you will see your trip details here.
            </p>
            <button className="button">Book a new Trip</button>
          </div>
        </div>
        <div className="small-devices-view">
          <div className="small-view-card">
            <img
              className="image"
              src="https://res.cloudinary.com/ddoxcq1ju/image/upload/v1728405263/Vector_ll7ymz.png"
              alt="empty-trips-view"
            />
            <h1 className="small-head">No upcoming trips.</h1>
            <p className="small-para">
              When you book a trip, you will see your trip details here.
            </p>
            <button className="small-button">Book a new Trip</button>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </>
    )
  }
  const renderNotEmptyView = () => {
    return <h1>Not Empty</h1>
  }
  return renderEmptyView()
}

export default MyTrips
