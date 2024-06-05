
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { NavBar } from './NavBar';
// main app code
function App() {
  // COMPONENTS: ONLY HAVE P AS OF NOW
  // DELETE THE ABOVE COMMENT WHEN NEW THINGS ARE ADDED

  //TODO: Move components to new files

  // main component for landing page
  const Home = () => {
    return (
      <div className='landing-container'>
        <p>Landing</p>
      </div>
    );
  }







  // main component for Portfolio page
  const Portfolio = () => {
    return (
      <p>Portfolio</p>
    );
  }

  // main component for contact page/ form
  const Contact = () => {
    return (
      <p>Contact Us</p>
    );
  }


  // Use browser router for routing and prevent refreshing
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
          <Route path="/contact-us" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
