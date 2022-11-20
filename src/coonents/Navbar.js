import React,{useState} from 'react';
import  '../styles/navbar.css'

//import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isNavExpanded,setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      
      <button className="hamburger" onClick={()=>{
        setIsNavExpanded(!isNavExpanded)
      }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className={isNavExpanded ? "navigationMenu expanded":"navigationMenu"}>
        <ul>
          <li>
            <a href="http://localhost:3000/home">Home</a>
          </li>
          <li>
            <a href="http://localhost:3000/services">Services</a>
          </li>
          <li>
            <a href="http://localhost:3000/gallery">Gallery</a>
          </li>
          <li>
            <a href="http://localhost:3000/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>

  );
};
export default Navbar;

/*const Navbar = () => {
    return (
      <div>
        <nav className='navbar navbar-expand-lg bg-light'>
          <div className='container-fluid'>
            <a className='navbar-brand' href='/'>
              ChrisDevCode
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon' />
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <a className='nav-link active' aria-current='page' href='/home'>
                    Home
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='/'>
                    Link
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link dropdown-toggle'
                    href='/'
                    id='navbarDropdown'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Dropdown
                  </a>
                  <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                    <li>
                      <a className='dropdown-item' href='/'>
                        Action
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='/'>
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className='dropdown-divider' />
                    </li>
                    <li>
                      <a className='dropdown-item' href='/'>
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='nav-item'>
                  <a className='nav-link disabled' href='/'>
                    Disabled
                  </a>
                </li>
              </ul>
              <form className='d-flex' role='search'>
                <input
                  className='form-control me-2'
                  type='search'
                  placeholder='Search'
                  aria-label='Search'
                />
                <button className='btn btn-outline-success' type='submit'>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }
  
  export default Navbar*/
