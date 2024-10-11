import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import UserDetails from './components/UserDetails'
import MyTrips from './components/MyTrips'
import NotFound from './components/NotFound'
import NewtripContext from './context/NewtripContext'
// import Header from './components/Header'
import './App.css'

// Note: Use the lists in your code to pass the test cases
const stepsList = [
  {stepId: 'YOUR_DETAILS', displayText: 'Your Details'},
  {stepId: 'DATE_SELECTION', displayText: 'Date Selection'},
  {stepId: 'GUESTS', displayText: 'Guests'},
  {stepId: 'TRAVEL_ASSISTANCE', displayText: 'Travel Assistance'},
  {stepId: 'CONFIRMATION', displayText: 'Confirmation'},
]

// Replace your code here
class App extends Component {
  
  state = {tripsList: []}

  componentDidMount() {
    this.storeList()
  }
  storeList = () => {
    const{tripsList} = this.state

    localStorage.setItem('tripsList',JSON.stringify(tripsList)) || []
  }
  addNewTrip = newTrip => {
    //this.setState(prevState => ({tripsList: [...prevState.tripsList, newTrip]}))
    const storedList = JSON.parse(localStorage.getItem('tripsList')) || []
  
   storedList.push(newTrip)
    this.setState({tripsList:storedList},this.storeList)
  }

  deleteTrip = id => {
    const {tripsList} = this.state
    const filteredList = tripsList.filter(each => each.id !== id)
    this.setState({tripsList: filteredList})
  }

  render() {
    const {tripsList} = this.state
    return (
      <NewtripContext.Provider
        value={{
          tripsList,
          addNewTrip: this.addNewTrip,
          deleteTrip: this.deleteTrip,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/user-details" component={UserDetails} />
          <Route exact path="/my-trips" component={MyTrips} />
          <Route component={NotFound} />
        </Switch>
      </NewtripContext.Provider>
    )
  }
}

export default App
