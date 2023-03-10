import logo from './logo.png';
import './App.css';
import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

function App() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  return (
    <div className="App">
      <header className="App-header">
        <div className='header'>
          <nav className="navbar">
            <a href='/' className="logo">
              <img src={logo} alt="logo" />
            </a>
            <div className='burger' onClick={handleClick}>
              {click ? (<FaTimes size={30} style={{ color: 'ffffff' }} />) : <FaBars size={30} style={{ color: '#ffffff' }} />}

            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a href="/">HOME</a>
              </li>
              <li className="nav-item">
                <a href="tel:+91-865-281-6746">📞Call Us</a>
              </li>

            </ul>
          </nav>
        </div>
      </header>
      {/* ----------------------------------------------------------------------------------- */}
      <>
            <div class="wave"></div>
            <div class="wave"></div>
            <div class="wave"></div>
            <div className='hero'>
                <div className="card">
                    <h2>our website is under construction</h2>

                    <div class="progress-value">
                        <div class="progress-value2"></div>
                    </div>

                    <button className="btn">
                        <a href="tel:+91-865-281-6746">📞 Call for More</a>
                    </button>
                </div>

            </div>
        </>
    </div>
  );
}

export default App;
