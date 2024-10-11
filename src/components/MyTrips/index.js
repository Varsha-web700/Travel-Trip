import {Link} from 'react-router-dom'
import {Component} from 'react'
import NewtripContext from '../../context/NewtripContext'
import './index.css'
import TripItem from '../TripItem'
import Header from '../Header'
import Footer from '../Footer'

const MyTrips = () => (
  <NewtripContext.Consumer>
    {value => {
      const {tripsList} = value
      const empty = tripsList.length === 0
      const renderEmptyView = () => (
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
      const renderNotEmptyView = () => (
        <NewtripContext.Consumer>
          {value => {
            const {tripsList} = value
            return (
              <ul className="my-trips-list-container">
                {tripsList.map(each => (
                  <TripItem tripdetails={each} key={each.id} />
                ))}
              </ul>
            )
          }}
        </NewtripContext.Consumer>
      )

      return <>{empty ? renderEmptyView() : renderNotEmptyView()}</>
    }}
  </NewtripContext.Consumer>
)

export default MyTrips
