import React from 'react';
import './Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <section className="hero-section">
        <div className='Navbar'>
            <div className='logo'>
                <img src="/img/logo.png" alt="logo" />
            </div>
            <div className='nav'>
                <ul>
                <li><NavLink to = '/' >Home</NavLink></li>
                    <li><NavLink to = '/RBAC' >RBAC</NavLink></li>
                    <li><NavLink to = '/About' >About</NavLink></li>
                    <li><NavLink to = '/Security' >Security</NavLink></li>
                    <li><NavLink to = '/Contact' >Contact</NavLink></li>
                </ul>
            </div>
        </div>


      <div className="hero-overlay">
      <div className="hero-image">
        <img src="/img/herosection.jpg" alt="Hero Image" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Secure Digital <br /> Evidence <br /> Management System</h1>
        <p className="hero-subtitle">
          ENSURING THE INTEGRITY & SECURITY OF DIGITAL EVIDENCE FOR <br /> THE LANDAR JUDICIARY
        </p>
        <div className="hero-description">
          <p>
            THE SECURE DIGITAL EVIDENCE MANAGEMENT SYSTEM <br /> GREENS IS CREATED TO REVISIT CARPETBORGH, <br />
            INDUSTRY AND REGULY COMPLETE DIGITAL EVIDENCE <br /> NONFUSION POP HE LANDAR JUDICIAL SYSTEM 
          </p>
        </div>
        <div className='hero-client'>
            <div className='hero1'>
                <h1>$10 Billion</h1>
            <p>Recovered for Our Clients</p>
            </div>
            <div className='hero1'>
            <h1>120 Plus</h1>
            <p>Reviews on Google or Avvo </p>
            </div>
        </div>
      </div>
      </div>
    </section>

<section className='hero2'>
<div className="hero-content her2">
        <h1 className="hero-title">Protecting Digital <br /> Evidence <br /> Strenghtening Justice</h1>
        <p className="hero-subtitle">
        THE SECURE DIGITAL EVIDENCE MANAGEMENT SYSTEM (SDEMS) ENSURES <br /> TAMPER-PROOF, ENCRYPTED, AND LEGALLY COMPLIANT HANDLING OF <br /> DIGITAL FORENSIC  EVIDENCE FOR SRI LANKA’S JUDICIARY.
        </p>
        <div className="hero-description">
          <p>
                SECURE DIGITAL EVIDENCE STORAGE <br />
                CHAIN-OF-CUSTODY TRACKING <br />
                ROLE-BASED ACCESS CONTROL (RBAC) <br />
                REAL-TIME SECURITY MONITORING
          </p>
        </div>
      </div>
      <div className="hero-image">
        <img src="/img/hero2.jpeg" alt="Hero Image" />
      </div>

</section>

    </>
  );
};

export default Home;