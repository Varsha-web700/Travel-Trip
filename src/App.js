import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import UserDetails from './components/UserDetails'
import NotFound from './components/NotFound'
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
const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
    <Route exact path="/user-details" component={UserDetails} />
    <Route component={NotFound} />
  </Switch>
  //<UserDetails />
)

export default App
