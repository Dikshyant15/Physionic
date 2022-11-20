import { useState, useEffect } from "react";
import { Home } from "./components/home";
import { Navigation } from "./components/navigation";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Testimonials } from "./components/testimonials";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
// //import { AppRouter } from './components/appRouter'
import { Login } from './components/login'
/*import { Gallery } from "./components/gallery";*/
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
// import {
//   BrowserRouter as Router,
//   Route,Switch
// } from "react-router-dom";
// import { Login } from './components/login'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      {/* <Demo /> */}
      {/* <Login/> */}
      {/* <AppRouter />  */}
       {/* <Router>
          {/* <Switch> */}
            {/* <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} /> */}
          {/* </Switch> */}
        {/* </Router>  */} 
      <Navigation />
      <Home data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} /> 
      {/* <Gallery data={landingPageData.Gallery}/> */}
    </> 
  );
};

export default App;












/*import AppRouter from "./components/AppRouter";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Layout";

//import Layout from './components/Layout'

function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;

import Layout from "./components/Layout";
import Home from "./components/Home"
import { BrowserRouter, Route,Routes } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Layout>
          <h1>demo</h1>
          <Route exact path="/home" component={Home} />
        </Layout>
      </Routes>
    </BrowserRouter>
  );
}

export default App;*/

