import {Component} from 'react'
import {Route} from 'react-router-dom'
import NewtripContext from '../../context/NewtripContext'
import './index.css'
import {CiCirclePlus, CiCircleMinus} from 'react-icons/ci'
import Header from '../Header'
import Footer from '../Footer'
import MyTrips from '../MyTrips'
import {v4} from 'uuid'

const travelAssistanceList = [
  {value: 'car', displayText: 'Car'},
  {value: 'flight', displayText: 'Flight'},
  {value: 'bus', displayText: 'Bus'},
  {value: 'train', displayText: 'Train'},
]

const apiStatusConstants = {
  intial: 'INTIAL',
  second: 'SECOND',
  third: 'THIRD',
  fourth: 'FOURTH',
  fifth: 'FIFTH',
  confirmed: 'CONFIRMED',
}
class UserDetails extends Component {
  state = {
    selectedVehicle: travelAssistanceList[0].value,
    isInvalid: false,
    name: '',
    endLocation: '',
    startLocation: '',
    startDate: '',
    endDate: '',
    adults: 1,
    child: 0,
    infants: 0,
    isCheckboxChecked: false,
    onBlurStartDate: false,
    onBlurEndDate: false,
    onBlurName: false,
    onBlurStart: false,
    onBlurEnd: false,
    // startDateEmpty:false,
    // endDateEmpty:false,
    apiStatus: apiStatusConstants.intial,
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeStart = event => {
    this.setState({startLocation: event.target.value})
  }

  onChangeEnd = event => {
    this.setState({endLocation: event.target.value})
  }

  onIncrementAdults = () => {
    const {adults} = this.state
    this.setState(prevState => ({
      adults: prevState.adults + 1,
    }))
  }

  onDecrementAdults = () => {
    const {adults} = this.state
    if (adults > 1) {
      this.setState(prevState => ({
        adults: prevState.adults - 1,
      }))
    }
  }

  onIncrementChild = () => {
    const {child} = this.state
    this.setState(prevState => ({
      child: prevState.child + 1,
    }))
  }

  onDecrementChild = () => {
    const {child} = this.state
    if (child > 0) {
      this.setState(prevState => ({
        child: prevState.child - 1,
      }))
    }
  }

  onIncrementInfants = () => {
    const {infants} = this.state
    this.setState(prevState => ({
      infants: prevState.infants + 1,
    }))
  }

  onDecrementInfants = () => {
    const {infants} = this.state
    if (infants > 0) {
      this.setState(prevState => ({
        infants: prevState.infants - 1,
      }))
    }
  }

  onChangeStartDate = event => {
    this.setState({startDate: event.target.value})
  }

  onChangeEndDate = event => {
    this.setState({endDate: event.target.value})
  }

  onChangeVehicle = event => {
    this.setState({selectedVehicle: event.target.value})
  }

  onBlurEndDate = () => {
    const {endDate} = this.state
    if (endDate === '') {
      this.setState({onBlurEndDate: true})
    }
  }

  onBlurStartDate = () => {
    const {startDate} = this.state
    if (startDate === '') {
      this.setState({onBlurStartDate: true})
    }
  }

  onBlurNameFun = () => {
    const {name} = this.state
    if (name === '') {
      this.setState({onBlurName: true})
    }
  }

  onBlurStartFun = () => {
    const {startLocation} = this.state
    if (startLocation === '') {
      this.setState({onBlurStart: true})
    }
  }

  onChangeAdults = event => {
    this.setState({adults: event.target.value})
  }

  onChangeChild = event => {
    this.setState({child: event.target.value})
  }

  onBlurEndFun = () => {
    const {endLocation} = this.state
    if (endLocation === '') {
      this.setState({onBlurEnd: true})
    }
  }

  previousOfDateSelection = () => {
    this.setState({apiStatus: 'INTIAL'})
  }

  onSubmit = event => {
    event.preventDefault()
    const {name, endLocation, startLocation} = this.state
    if (name !== '' && startLocation !== '' && endLocation !== '') {
      this.setState({
        apiStatus: apiStatusConstants.second,
        onBlurName: false,
        onBlurEnd: false,
        onBlurStart: false,
      })
    } else if (name === '') {
      this.setState({onBlurName: true})
    } else if (startLocation === '') {
      this.setState({onBlurName: false})
      this.setState({onBlurStart: true})
    } else if (endLocation === '') {
      this.setState({onBlurStart: false})
      this.setState({onBlurEnd: true})
    }
  }

  submitDatesPage = event => {
    event.preventDefault()
    const {endDate, startDate} = this.state
    const newStartDate = new Date(startDate)
    const newEndDate = new Date(endDate)
    if (startDate === '') {
      this.setState({onBlurStartDate: true})
    } else if (endDate === '') {
      this.setState({onBlurStartDate: false})
      this.setState({onBlurEndDate: true})
    } else if (newEndDate > newStartDate) {
      this.setState({
        apiStatus: apiStatusConstants.third,
        isInvalid: false,
        onBlurEndDate: false,
        onBlurStartDate: false,
      })
    } else {
      this.setState({isInvalid: true})
    }
  }

  onSubmitGuests = event => {
    event.preventDefault()
    this.setState({apiStatus: apiStatusConstants.fourth})
  }

  onSubmitTravelAss = event => {
    event.preventDefault()
    this.setState({apiStatus: apiStatusConstants.fifth})
  }

  onSubmitConfirm = event => {
    event.preventDefault()
    this.setState({apiStatus: apiStatusConstants.confirmed})
  }

  prevOfTravelAss = () => {
    this.setState({apiStatus: apiStatusConstants.third})
  }

  prevOfGuests = () => {
    this.setState({apiStatus: apiStatusConstants.second})
  }

  onClickCheckbox = () => {
    this.setState(prevState => ({
      isCheckboxChecked: !prevState.isCheckboxChecked,
    }))
  }

  onCancelOrConfirmTrip = () => {
    this.setState({
      apiStatus: apiStatusConstants.intial,
      selectedVehicle: travelAssistanceList[0].value,
      isInvalid: false,
      name: '',
      endLocation: '',
      startLocation: '',
      startDate: '',
      endDate: '',
      adults: 1,
      child: 0,
      infants: 0,
      isCheckboxChecked: false,
      onBlurStartDate: false,
      onBlurEndDate: false,
      onBlurName: false,
      onBlurStart: false,
      onBlurEnd: false,
    })
  }

  renderFirstPage = () => {
    const {
      onBlurEnd,
      onBlurStart,
      onBlurName,
      name,
      startLocation,
      endLocation,
    } = this.state
    const borderclassName = onBlurName ? 'error-input-card' : 'input-card'
    const borderclassStart = onBlurStart ? 'error-input-card' : 'input-card'
    const borderclassEnd = onBlurEnd ? 'error-input-card' : 'input-card'
    return (
      <div className="dark-card">
        <h1 className="user-heading">Your Details</h1>
        <p className="user-para">Enter your name and location details</p>
        <form onSubmit={this.onSubmit}>
          <div className="enter-details-white-card">
            <label htmlFor="name">Name</label>
            <input
              onBlur={this.onBlurNameFun}
              value={name}
              onChange={this.onChangeName}
              type="text"
              id="name"
              className={borderclassName}
            />
            {onBlurName && <p className="errormsg">Enter your name</p>}
            <label htmlFor="start">Start Location</label>
            <input
              onBlur={this.onBlurStartFun}
              value={startLocation}
              onChange={this.onChangeStart}
              type="text"
              id="start"
              className={borderclassStart}
            />
            {onBlurStart && (
              <p className="errormsg">Enter you start location</p>
            )}
            <label htmlFor="end">End Location</label>
            <input
              onBlur={this.onBlurEndFun}
              value={endLocation}
              onChange={this.onChangeEnd}
              type="text"
              id="end"
              className={borderclassEnd}
            />
            {onBlurEnd && <p className="errormsg">Enter your end location</p>}
            <div className="button-container">
              <button type="submit" className="next-button">
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  renderSecondPage = () => {
    const {startDate, onBlurStartDate, endDate, onBlurEndDate, isInvalid} =
      this.state
    const borderenddate = onBlurEndDate ? 'error-input-card' : 'input-card'
    const borderstartdate = onBlurStartDate ? 'error-input-card' : 'input-card'
    return (
      <div className="dark-card">
        <h1 className="user-heading">Date Selection</h1>
        <p className="user-para">Select your Start and End Date.</p>
        <form onSubmit={this.submitDatesPage}>
          <div className="enter-details-white-card">
            <label htmlFor="startdt">Start Date</label>
            <input
              onBlur={this.onBlurStartDate}
              value={startDate}
              onChange={this.onChangeStartDate}
              type="date"
              id="startdt"
              className={borderstartdate}
            />
            {onBlurStartDate && <p className="errormsg">Select start date</p>}
            <label htmlFor="enddt">End Date</label>
            <input
              onBlur={this.onBlurEndDate}
              value={endDate}
              onChange={this.onChangeEndDate}
              type="date"
              id="enddt"
              className={borderenddate}
            />
            {onBlurEndDate && <p className="errormsg">Select end date</p>}
            {isInvalid && (
              <p className="errormsg">
                The end date cannot be less than the start date
              </p>
            )}
            <div>
              <button type="submit" className="next-button">
                Next
              </button>
              <button
                onClick={this.previousOfDateSelection}
                type="button"
                className="previous-button"
              >
                Previous
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  renderThirdPage = () => {
    const {adults, child, infants} = this.state
    return (
      <div className="dark-card">
        <h1 className="user-heading">Guests</h1>
        <p className="user-para">Select your Guests</p>
        <form onSubmit={this.onSubmitGuests}>
          <div className="enter-details-white-card">
            <div className="names-counter">
              <div>
                <h1 className="age">Adults</h1>
                <p className="age-para">Age 13 or above</p>
              </div>
              <div className="count-button">
                <button
                  onClick={this.onIncrementAdults}
                  className="countingbutton"
                  type="button"
                >
                  <CiCirclePlus size={60} />
                </button>
                <p className="adults-count">{adults}</p>
                <button
                  type="button"
                  onClick={this.onDecrementAdults}
                  className="countingbutton"
                >
                  <CiCircleMinus size={60} />
                </button>
              </div>
              <hr />
            </div>
            <div className="names-counter">
              <div>
                <h1 className="age">Children</h1>
                <p className="age-para">Age 2 to 12</p>
              </div>
              <div className="count-button">
                <button
                  type="button"
                  onClick={this.onIncrementChild}
                  className="countingbutton"
                >
                  <CiCirclePlus size={60} />
                </button>
                <p className="adults-count">{child}</p>
                <button
                  type="button"
                  onClick={this.onDecrementChild}
                  className="countingbutton"
                >
                  <CiCircleMinus size={60} />
                </button>
              </div>
              <hr />
            </div>
            <div className="names-counter">
              <div>
                <h1 className="age">Infants</h1>
                <p className="age-para">Under 2</p>
              </div>
              <div className="count-button">
                <button
                  type="button"
                  onClick={this.onIncrementInfants}
                  className="countingbutton"
                >
                  <CiCirclePlus size={60} />
                </button>
                <p className="adults-count">{infants}</p>
                <button
                  type="button"
                  onClick={this.onDecrementInfants}
                  className="countingbutton"
                >
                  <CiCircleMinus size={60} />
                </button>
              </div>
              <hr />
            </div>
            <div>
              <button type="submit" className="next-button">
                Next
              </button>
              <button
                onClick={this.prevOfGuests}
                type="button"
                className="previous-button"
              >
                Previous
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  renderFourthPage = () => {
    const {isCheckboxChecked, selectedVehicle} = this.state
    return (
      <div className="dark-card">
        <h1 className="user-heading">Travel Assistance</h1>
        <p className="user-para">Select your Travel Assistance.</p>
        <form onSubmit={this.onSubmitTravelAss}>
          <div className="enter-details-white-card">
            <div className="checkbox-card">
              <label className="label-check" htmlFor="travelAss">
                Travel Assistance
              </label>
              <input
                onChange={this.onClickCheckbox}
                type="checkbox"
                id="travelAss"
                className="checkbox-input"
              />
            </div>
            {isCheckboxChecked && (
              <div className="dropdown-card">
                <label className="label-travel" htmlFor="dropdown">
                  Travel Assistance
                </label>
                <br />
                <select
                  className="dropdown"
                  value={selectedVehicle}
                  onChange={this.onChangeVehicle}
                >
                  {travelAssistanceList.map(each => (
                    <option value={each.value}>{each.displayText}</option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <button type="submit" className="next-button">
                Next
              </button>
              <button
                onClick={this.prevOfTravelAss}
                type="button"
                className="previous-button"
              >
                Previous
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  renderFifthPage = () => (
    <NewtripContext.Consumer>
      {value => {
        const {addNewTrip} = value
        const {
          name,
          startLocation,
          endLocation,
          startDate,
          endDate,
          adults,
          child,
          infants,
          selectedVehicle,
        } = this.state
        const guests = adults + child + infants
        const onConfirmToAdd = () => {
          const {endLocation, startDate, endDate} = this.state
          const newTrip = {
            id: v4(),
            endLocation,
            startDate,
            endDate,
          }
          addNewTrip(newTrip)
        }
        return (
          <div className="dark-card">
            <h1 className="user-heading">Confirmation</h1>
            <p className="user-para">Confirm your details</p>
            <form onSubmit={this.onSubmitConfirm}>
              <div className="enter-details-white-card-confirm">
                <h1 className="confirm">
                  Name: <span className="span-element">{name}</span>
                </h1>
                <h1 className="confirm">
                  Start Location:{' '}
                  <span className="span-element">{startLocation}</span>
                </h1>
                <h1 className="confirm">
                  End Location:{' '}
                  <span className="span-element">{endLocation}</span>
                </h1>
                <h1 className="confirm">
                  Start Date: <span className="span-element">{startDate}</span>
                </h1>
                <h1 className="confirm">
                  End Date: <span className="span-element">{endDate}</span>
                </h1>
                <h1 className="confirm">
                  Guests: <span className="span-element">{guests}</span>
                </h1>
                <h1 className="confirm">
                  Travel Assistance:{' '}
                  <span className="span-element">{selectedVehicle}</span>
                </h1>
                <div>
                  <button
                    type="submit"
                    className="next-button"
                    onClick={onConfirmToAdd}
                  >
                    Confirm
                  </button>
                  <button
                    onClick={this.onCancelOrConfirmTrip}
                    type="button"
                    className="previous-button"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        )
      }}
    </NewtripContext.Consumer>
  )

  renderConfirmedPage = () => (
    <div className="dark-card">
      <div className="enter-details-white-card">
        <div className="confirm-button-and-container">
          <img
            className="completed-img"
            src="https://res.cloudinary.com/ddoxcq1ju/image/upload/v1728290074/360_F_303721767_iNO49Cr0bPrcZT9eIuTr0VUa5QXuK1es_ky6hbx.jpg"
          />
        </div>
        <h1 className="confirmed-head">Awsome!</h1>
        <p className="confirmed-para">Your booking has been confirmed.</p>
        <div className="confirm-button-and-container">
          <button
            className="confirmed-button"
            onClick={this.onCancelOrConfirmTrip}
          >
            Book a New Trip
          </button>
        </div>
      </div>
    </div>
  )

  // Small Devices Render
  renderIntialForSmall = () => {
    const {
      onBlurEnd,
      onBlurStart,
      onBlurName,
      name,
      startLocation,
      endLocation,
    } = this.state
    const borderclassName = onBlurName ? 'error-input-card' : 'input-card'
    const borderclassStart = onBlurStart ? 'error-input-card' : 'input-card'
    const borderclassEnd = onBlurEnd ? 'error-input-card' : 'input-card'
    return (
      <div className="user-container-smalldevice">
        <h1 className="user-heading-small">Your Details</h1>
        <p className="user-para-small">Enter your name and location details</p>
        <form onSubmit={this.onSubmit}>
          <div className="enter-details-white-card">
            <label htmlFor="name">Name</label>
            <input
              onBlur={this.onBlurNameFun}
              value={name}
              onChange={this.onChangeName}
              type="text"
              id="name"
              className={borderclassName}
            />
            {onBlurName && <p className="errormsg">Enter your name</p>}
            <label htmlFor="start">Start Location</label>
            <input
              onBlur={this.onBlurStartFun}
              value={startLocation}
              onChange={this.onChangeStart}
              type="text"
              id="start"
              className={borderclassStart}
            />
            {onBlurStart && (
              <p className="errormsg">Enter you start location</p>
            )}
            <label htmlFor="end">End Location</label>
            <input
              onBlur={this.onBlurEndFun}
              value={endLocation}
              onChange={this.onChangeEnd}
              type="text"
              id="end"
              className={borderclassEnd}
            />
            {onBlurEnd && <p className="errormsg">Enter your end location</p>}
            <div className="button-container">
              <button type="submit" className="next-button">
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  renderSecondForSmall = () => {
    const {startDate, onBlurStartDate, endDate, onBlurEndDate, isInvalid} =
      this.state
    const borderenddate = onBlurEndDate ? 'error-input-card' : 'input-card'
    const borderstartdate = onBlurStartDate ? 'error-input-card' : 'input-card'
    return (
      <div className="user-container-smalldevice">
        <h1 className="user-heading-small">Date Selection</h1>
        <p className="user-para-small">Select your Start and End Date.</p>
        <form onSubmit={this.submitDatesPage}>
          <div className="enter-details-white-card">
            <label htmlFor="startdt">Start Date</label>
            <input
              onBlur={this.onBlurStartDate}
              value={startDate}
              onChange={this.onChangeStartDate}
              type="date"
              id="startdt"
              className={borderstartdate}
            />
            {onBlurStartDate && <p className="errormsg">Select start date</p>}
            <label htmlFor="enddt">End Date</label>
            <input
              onBlur={this.onBlurEndDate}
              value={endDate}
              onChange={this.onChangeEndDate}
              type="date"
              id="enddt"
              className={borderenddate}
            />
            {onBlurEndDate && <p className="errormsg">Select end date</p>}
            {isInvalid && (
              <p className="errormsg">
                The end date cannot be less than the start date
              </p>
            )}
            <div>
              <button type="submit" className="next-button">
                Next
              </button>
              <button
                onClick={this.previousOfDateSelection}
                type="button"
                className="previous-button"
              >
                Previous
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  renderThirdForSmall = () => {
    const {adults, child, infants} = this.state
    return (
      <div className="user-container-smalldevice">
        <h1 className="user-heading-small">Guests</h1>
        <p className="user-para-small">Select your Guests</p>
        <form onSubmit={this.onSubmitGuests}>
          <div className="enter-details-white-card">
            <div className="names-counter">
              <div>
                <h1 className="age">Adults</h1>
                <p className="age-para">Age 13 or above</p>
              </div>
              <div className="count-button">
                <button
                  onClick={this.onIncrementAdults}
                  className="countingbutton"
                  type="button"
                >
                  <CiCirclePlus size={60} />
                </button>
                <p className="adults-count">{adults}</p>
                <button
                  type="button"
                  onClick={this.onDecrementAdults}
                  className="countingbutton"
                >
                  <CiCircleMinus size={60} />
                </button>
              </div>
              <hr />
            </div>
            <div className="names-counter">
              <div>
                <h1 className="age">Children</h1>
                <p className="age-para">Age 2 to 12</p>
              </div>
              <div className="count-button">
                <button
                  type="button"
                  onClick={this.onIncrementChild}
                  className="countingbutton"
                >
                  <CiCirclePlus size={60} />
                </button>
                <p className="adults-count">{child}</p>
                <button
                  type="button"
                  onClick={this.onDecrementChild}
                  className="countingbutton"
                >
                  <CiCircleMinus size={60} />
                </button>
              </div>
              <hr />
            </div>
            <div className="names-counter">
              <div>
                <h1 className="age">Infants</h1>
                <p className="age-para">Under 2</p>
              </div>
              <div className="count-button">
                <button
                  type="button"
                  onClick={this.onIncrementInfants}
                  className="countingbutton"
                >
                  <CiCirclePlus size={60} />
                </button>
                <p className="adults-count">{infants}</p>
                <button
                  type="button"
                  onClick={this.onDecrementInfants}
                  className="countingbutton"
                >
                  <CiCircleMinus size={60} />
                </button>
              </div>
              <hr />
            </div>
            <div>
              <button type="submit" className="next-button">
                Next
              </button>
              <button
                onClick={this.prevOfGuests}
                type="button"
                className="previous-button"
              >
                Previous
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  renderFourthForSmall = () => {
    const {isCheckboxChecked, selectedVehicle} = this.state
    return (
      <div className="user-container-smalldevice">
        <h1 className="user-heading-small">Travel Assistance</h1>
        <p className="user-para-small">Select your Travel Assistance.</p>
        <form onSubmit={this.onSubmitTravelAss}>
          <div className="enter-details-white-card">
            <div className="checkbox-card">
              <label className="label-check" htmlFor="travelAss">
                Travel Assistance
              </label>
              <input
                onChange={this.onClickCheckbox}
                type="checkbox"
                id="travelAss"
                className="checkbox-input"
              />
            </div>
            {isCheckboxChecked && (
              <div className="dropdown-card">
                <label className="label-travel" htmlFor="dropdown">
                  Travel Assistance
                </label>
                <br />
                <select
                  className="dropdown"
                  value={selectedVehicle}
                  onChange={this.onChangeVehicle}
                >
                  {travelAssistanceList.map(each => (
                    <option value={each.value}>{each.displayText}</option>
                  ))}
                </select>
              </div>
            )}
            <div>
              <button type="submit" className="next-button">
                Next
              </button>
              <button
                onClick={this.prevOfTravelAss}
                type="button"
                className="previous-button"
              >
                Previous
              </button>
            </div>
          </div>
        </form>
      </div>
    )
  }

  renderFifthForSmall = () => (
    <NewtripContext.Consumer>
      {value => {
        const {addNewTrip} = value
        const {
          name,
          startLocation,
          endLocation,
          startDate,
          endDate,
          adults,
          child,
          infants,
          selectedVehicle,
        } = this.state
        const guests = adults + child + infants
        const onConfirmToAdd = () => {
          const {endLocation, startDate, endDate} = this.state
          const newTrip = {
            id: v4(),
            endLocation,
            startDate,
            endDate,
          }
          addNewTrip(newTrip)
        }
        return (
          <div className="user-container-smalldevice">
            <h1 className="user-heading-small">Confirmation</h1>
            <p className="user-para-small">Confirm your details</p>
            <form onSubmit={this.onSubmitConfirm}>
              <div className="enter-details-white-card-confirm">
                <h1 className="confirm">
                  Name: <span className="span-element">{name}</span>
                </h1>
                <h1 className="confirm">
                  Start Location:{' '}
                  <span className="span-element">{startLocation}</span>
                </h1>
                <h1 className="confirm">
                  End Location:{' '}
                  <span className="span-element">{endLocation}</span>
                </h1>
                <h1 className="confirm">
                  Start Date: <span className="span-element">{startDate}</span>
                </h1>
                <h1 className="confirm">
                  End Date: <span className="span-element">{endDate}</span>
                </h1>
                <h1 className="confirm">
                  Guests: <span className="span-element">{guests}</span>
                </h1>
                <h1 className="confirm">
                  Travel Assistance:{' '}
                  <span className="span-element">{selectedVehicle}</span>
                </h1>
                <div>
                  <button
                    type="submit"
                    className="next-button"
                    onClick={onConfirmToAdd}
                  >
                    Confirm
                  </button>
                  <button type="button" className="previous-button">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        )
      }}
    </NewtripContext.Consumer>
  )

  renderConfirmedForSmall = () => (
    <div className="user-container-smalldevice">
      <div className="confirm-button-and-container">
        <img
          className="completed-img"
          src="https://res.cloudinary.com/ddoxcq1ju/image/upload/v1728290074/360_F_303721767_iNO49Cr0bPrcZT9eIuTr0VUa5QXuK1es_ky6hbx.jpg"
        />
      </div>
      <h1 className="confirmed-head">Awsome!</h1>
      <p className="confirmed-para">Your booking has been confirmed.</p>
      <div className="confirm-button-and-container">
        <button
          className="confirmed-button"
          onClick={this.onCancelOrConfirmTrip}
        >
          Book a New Trip
        </button>
      </div>
    </div>
  )

  renderFinal = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.intial:
        return this.renderFirstPage()
      case apiStatusConstants.second:
        return this.renderSecondPage()
      case apiStatusConstants.third:
        return this.renderThirdPage()
      case apiStatusConstants.fourth:
        return this.renderFourthPage()
      case apiStatusConstants.fifth:
        return this.renderFifthPage()
      case apiStatusConstants.confirmed:
        return this.renderConfirmedPage()
      default:
        return null
    }
  }

  renderFinalForSmall = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.intial:
        return this.renderIntialForSmall()
      case apiStatusConstants.second:
        return this.renderSecondForSmall()
      case apiStatusConstants.third:
        return this.renderThirdForSmall()
      case apiStatusConstants.fourth:
        return this.renderFourthForSmall()
      case apiStatusConstants.fifth:
        return this.renderFifthForSmall()
      case apiStatusConstants.confirmed:
        return this.renderConfirmedForSmall()
      default:
        return null
    }
  }

  render() {
    const scrollerClassName = 'single-scroller'
    return (
      <>
        <div className="large-devices-ui">
          <Header />
          <div className="user-container">
            <div className="white-card">
              <div className="num-stage">
                <h1 className="number">1</h1>
                <h1 className="stage">Your Details</h1>
              </div>
              <div className="num-stage">
                <h1 className="number">2</h1>
                <h1 className="stage">Date Selection</h1>
              </div>
              <div className="num-stage">
                <h1 className="number">3</h1>
                <h1 className="stage">Guests</h1>
              </div>
              <div className="num-stage">
                <h1 className="number">4</h1>
                <h1 className="stage">Travel Assistence</h1>
              </div>
              <div className="num-stage">
                <h1 className="number">5</h1>
                <h1 className="stage">Confirmation</h1>
              </div>
            </div>
            {this.renderFinal()}
          </div>
        </div>

        <div className="small-devices-ui">
          <div className="scrollers">
            <div className={ scrollerClassName}></div>
            <div className={ scrollerClassName}></div>
            <div className={ scrollerClassName}></div>
            <div className={ scrollerClassName}></div>
            <div className={ scrollerClassName}></div>
          </div>
          <div className="user-container-smalldevice">
            {this.renderFinalForSmall()}

            <Footer />
          </div>
        </div>
        <div className="mytrips-component">
          <MyTrips />
        </div>
      </>
    )
  }
}

export default UserDetails
