import {Component} from 'react'
import {Route} from 'react-router-dom'
import './index.css'
import {CiCirclePlus, CiCircleMinus} from 'react-icons/ci'
import Header from '../Header'

const apiStatusConstants = {
  intial: 'INTIAL',
  second: 'SECOND',
  third: 'THIRD',
  fourth: 'FOURTH',
  fifth: 'FIFTH',
}
class UserDetails extends Component {
  state = {
    name: '',
    endLocation: '',
    startLocation: '',
    startDate: '',
    endDate: '',
    adults: 0,
    child: 0,
    infants: 0,
    isCheckboxChecked: false,
    onBlurStartDate: false,
    onBlurEndDate: false,
    onBlurName: false,
    onBlurStart: false,
    onBlurEnd: false,
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
    this.setState(prevState => ({
      adults: prevState.adults - 1,
    }))
  }

  onIncrementChild = () => {
    const {child} = this.state
    this.setState(prevState => ({
      child: prevState.child + 1,
    }))
  }

  onDecrementChild = () => {
    const {child} = this.state
    this.setState(prevState => ({
      child: prevState.child - 1,
    }))
  }

  onIncrementInfants = () => {
    const {infants} = this.state
    this.setState(prevState => ({
      infants: prevState.infants + 1,
    }))
  }

  onDecrementInfants = () => {
    const {infants} = this.state
    this.setState(prevState => ({
      infants: prevState.infants - 1,
    }))
  }

  onChangeStartDate = event => {
    this.setState({startDate: event.traget.value})
  }

  onChangeEndDate = event => {
    this.setState({endDate: event.target.value})
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
      this.setState({apiStatus: apiStatusConstants.second})
    }
  }

  submitDatesPage = event => {
    event.preventDefault()
    const {endDate, startDate} = this.state

    this.setState({apiStatus: apiStatusConstants.third})
  }

  onSubmitGuests = event => {
    event.preventDefault()
    this.setState({apiStatus: apiStatusConstants.fourth})
  }

  onSubmitTravelAss = event => {
    event.preventDefault()
    this.setState({apiStatus: apiStatusConstants.fifth})
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
    const {startDate, onBlurStartDate, endDate, onBlurEndDate} = this.state
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
            <label htmlFor="enddt">Start Date</label>
            <input
              onBlur={this.onBlurEndDate}
              value={endDate}
              onChange={this.onChangeEndDate}
              type="date"
              id="enddt"
              className={borderenddate}
            />
            {onBlurEndDate && <p className="errormsg">Select end date</p>}
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
                >
                  <CiCirclePlus size={60} />
                </button>
                <p className="adults-count">{adults}</p>
                <button
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
                  onClick={this.onIncrementChild}
                  className="countingbutton"
                >
                  <CiCirclePlus size={60} />
                </button>
                <p className="adults-count">{child}</p>
                <button
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
                  onClick={this.onIncrementInfants}
                  className="countingbutton"
                >
                  <CiCirclePlus size={60} />
                </button>
                <p className="adults-count">{infants}</p>
                <button
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
    const {isCheckboxChecked} = this.state
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
                <select>
                  <option>Car</option>
                  <option>Bus</option>
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

  renderFifthPage = () => {
    const {
      name,
      startLocation,
      endLocation,
      startDate,
      endDate,
      adults,
      child,
      infants,
    } = this.state
    const guests = adults + child + infants
    return (
      <div className="dark-card">
        <h1 className="user-heading">Confirmation</h1>
        <p className="user-para">Confirm your details</p>
        <form>
          <div className="enter-details-white-card">
            <h1 className="confirm">
              Name: <span className="span-element">{name}</span>
            </h1>
            <h1 className="confirm">
              Start Location:{' '}
              <span className="span-element">{startLocation}</span>
            </h1>
            <h1 className="confirm">
              End Location: <span className="span-element">{endLocation}</span>
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
              Travel Assistance: <span className="span-element" />
            </h1>
            <div>
              <button type="submit" className="next-button">
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
  }

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
      default:
        return null
    }
  }

  render() {
    return (
      <>
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
      </>
    )
  }
}

export default UserDetails
