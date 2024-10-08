import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const onClickLogout = () => {
    // const token = Cookies.get('jwt_token')
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div>
      <nav className="nav-container">
        <h1 className="nav-heading">Travel Trip</h1>
        <div className="links">
          <Link to="/">
            <h1 className="link">Home</h1>
          </Link>
          
          
            <h1 className="link">My Trips</h1>
            
          
        </div>
        <button className="logout" onClick={onClickLogout}>
          Logout
        </button>
      </nav>
    </div>
  )
}

export default withRouter(Header)
