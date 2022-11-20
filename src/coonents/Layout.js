import React from 'react';
import Header from './Header';
//import Navbar from './Navbar';
import Navigation from './Navigation';
import background from '../images/logo.png'

const divStyle = {
    width: '100%',
    height: '795px',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
  };
const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div style={divStyle}>
                <Header/>
                <div>
                    <Navigation/>
                    {/*<Navbar />*/}
                    <main>{children}</main>
                </div>
            </div>
        </React.Fragment >
    );
};

export default Layout;


/*import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout*/
