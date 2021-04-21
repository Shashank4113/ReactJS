import './Header.css';
import logo from './logo1.png'

const Header = () => {
  
    return ( 
        <header>
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="https:www.google.com" className="nav-link">Home</a></li>
              <li><a href="/" className="nav-link">About</a></li>
              <li><a href="/" className="nav-link">Contact Us</a></li>
              <li><a href="/" className="nav-link">Courses</a></li>
            </ul>
          </nav>
        </header>
    );
}
 
export default Header;
