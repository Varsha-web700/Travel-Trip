import {Switch, Route} from 'react-router-dom'
import {Component} from 'react'
import Login from './components/Login'
import Home from './components/Home'
import UserDetails from './components/UserDetails'
import MyTrips from './components/MyTrips'
import NotFound from './components/NotFound'
import NewtripContext from './context/NewtripContext'
import ProtectedRoute from './components/ProtectedRoute'
// import Header from './components/Header'
import './App.css'

// Note: Use the lists in your code to pass the test case

// Replace your code here
class App extends Component {
  state = {tripsList: []}
  //componentDidMount() {
  //this.storeList()
  //}
  //storeList = () => {
  //const {tripsList} = this.state

  //localStorage.setItem('tripsList', JSON.stringify(tripsList)) || []
  //}

  addNewTrip = newTrip => {
    //this.setState(prevState => ({tripsList: [...prevState.tripsList, newTrip]}))

    this.setState(prevState => ({tripsList: [...prevState.tripsList, newTrip]}))
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
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/user-details" component={UserDetails} />
          <ProtectedRoute exact path="/my-trips" component={MyTrips} />
          <ProtectedRoute component={NotFound} />
        </Switch>
      </NewtripContext.Provider>
    )
  }
}

export default App
