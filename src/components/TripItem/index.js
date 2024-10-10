import './index.css'

const TripItem = props => {
  const {tripdetails} = props
  const {endLocation, startDate, endDate} = tripdetails
  return (
    <>
    <h1 className="my-trips-head">My Trips</h1>
      <div className="trip-list-for-large-devices">
        
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
            <button className="cancel-button">Cancel</button>
          </div>
        </li>
      </div>
      <div className="trip-list-for-small-devices">
        <li className="small-device-list-item">
          <h1 className="small-divice-end-location">{endLocation}</h1>
          <p className="small-device-date-para">Date</p>
          <p className="small-device-duration">
            {startDate} to {endDate}
          </p>
          <button className="cancel-button">Cancel</button>
        </li>
      </div>
    </>
  )
}

export default TripItem
