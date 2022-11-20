import React from 'react'
import '../styles/navigation.css'
import { Link } from "react-router-dom";



export const Navigation = (props) => {
    return (
        <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
            <div className='container'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
                        <span className='sr-only'>Toggle navigation</span>{' '}
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <a className='navbar-brand page-scroll' href='page-top'>Logo</a>
                </div>

                <div
                    className='collapse navbar-collapse'
                    id='bs-example-navbar-collapse-1'
                >
                    <ul className='nav navbar-nav navbar-right'>
                        <li><a href='#features' className='page-scroll'>
                            Features</a></li>
                        <li><a href='#about' className='page-scroll'>
                            About</a></li>
                        <li><a href='#services' className='page-scroll'>
                            Services</a></li>
                        <li><a href='#gallery' className='page-scroll'>
                            Gallery</a></li>
                        <li><a href='#testimonials' className='page-scroll'>
                            Testimonials</a></li><li>
                            <a href='#contact' className='page-scroll'>
                                Contact Us</a></li>
                        <a class="btn btn-primary btn-lg" href="/login" role="button">Login</a>
                        {/* <div><Link to="/login">Login
                        <button>Login</button></Link></div> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { Login } from './login'


// /**
//  * https://stackoverflow.com/questions/71161792/react-router-rendering-blank-page
//  */

// const Home = () => <h1>Home</h1>;

// export const Navigation=()=> {
//   return (
//     <div className="App">
//       <Router>
//         <header>
//           <div className="logo">MyPortfolio</div>
//           <ul>
//             <Link to="/">
//               <li>Home</li>
//             </Link>
//             <Link to="/login">
//               <li>Login</li>
//             </Link>
           
//           </ul>
//         </header>

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" component={<Login />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }
