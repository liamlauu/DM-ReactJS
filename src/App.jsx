
import * as React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
// main app code
function App() {
  // COMPONENTS: ONLY HAVE P AS OF NOW
  // DELETE THE ABOVE COMMENT WHEN NEW THINGS ARE ADDED

  //TODO: Move components to new files

  // main component for landing page
  const Home = () => {
    return (
      <p>Home</p>
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

  //nav bar
  // TODO: Refractor for code maintainability
  const NavBar = () => {
    return(
      <nav className='nav'>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/portfolio"> Our Portfolio </Link>
          </li>
          <li>
            <Link to="/contact-us"> Contact Us Now! </Link>
          </li>
        </ul>
      </nav>
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
