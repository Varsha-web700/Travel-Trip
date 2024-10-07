import './index.css'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'

const Footer = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="footer-container">
    <Link to = '/'>
      <button className="footer-button">
        <img
          className="footer-icon"
          src="https://res.cloudinary.com/ddoxcq1ju/image/upload/v1727940661/Frame_29_bkfd90.png"
        />
      </button>
      </Link>
      <Link to="/user-details">
        <button className="footer-button">
          <img
            className="footer-suit"
            src="https://res.cloudinary.com/ddoxcq1ju/image/upload/v1727940920/suitcase-2-line_1_z2cnxz.png"
          />
        </button>
      </Link>
      <button onClick={onClickLogout} className="footer-button">
        <img
          className="footer-icon"
          src="https://res.cloudinary.com/ddoxcq1ju/image/upload/v1727941060/Frame_35_l0x8t7.png"
        />
      </button>
    </div>
  )
}

export default withRouter(Footer)
