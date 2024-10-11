import './index.css'
import Header from '../Header'
import Footer from '../Footer'
import NewtripContext from '../../context/NewtripContext'

const TripItem = props => (
  <NewtripContext.Consumer>
    {value => {
      const {deleteTrip} = value
      const {tripdetails} = props
      const {endLocation, startDate, endDate, id} = tripdetails
      const onClickCancel = () => {
        deleteTrip(id)
      }
      return (
        <>
          
          <div className="trip-list-for-large-devices">
            <Header />
            <h1 className="my-trips-head">My Trips</h1>
            <li className="list-item">
              <div>
                <h1 className="location">{endLocation}</h1>
              </div>
              <div>
                <p className="date-para">Date</p>
                <p className="duration">
                  {startDate} to {endDate}
                </p>
              </div>
              <div>
                <button className="cancel-button" onClick={onClickCancel}>
                  Cancel
                </button>
              </div>
            </li>
          </div>
          <div className="trip-list-for-small-devices">
          <h1 className="my-trips-head">My Trips</h1>
            <li className="small-device-list-item">
              <h1 className="small-divice-end-location">{endLocation}</h1>
              <p className="small-device-date-para">Date</p>
              <p className="small-device-duration">
                {startDate} to {endDate}
              </p>
              <button className="cancel-button" onClick={onClickCancel}>
                Cancel
              </button>
            </li>
            <Footer />
          </div>
        </>
      )
    }}
  </NewtripContext.Consumer>
)

export default TripItem
