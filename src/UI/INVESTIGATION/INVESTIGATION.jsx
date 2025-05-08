import { NavLink } from 'react-router-dom';
import './INVESTIGATION.css';

export const INVESTIGATION = () => {
  return (
    <section className='investigation'>
     <div className="investigation-img">
        <div className='Navbar'>
            <div className='logo'>
                <img src="/img/logo.png" alt="logo" />
            </div>
            <div className='nav'>
                <ul>
                <li><NavLink to = '/' >Home</NavLink></li>
                    <li><NavLink to = '/RBAC' >UPLOAD</NavLink></li>
                    <li><NavLink to = '/About' >CASES</NavLink></li>
                    <li><NavLink to = '/About' >AUDIT LOGS</NavLink></li>
                    <li><NavLink to = '/Security' >Security </NavLink></li>
                    <li><NavLink to = '/Contact' >PROFILE</NavLink></li>
                    <li><NavLink to = '/Contact' >LOG OUT</NavLink></li>

                </ul>
            </div>
        </div>

        <div className='investigation-content'>
            <h1>INVESTIGATION</h1>
        </div>
        </div>

<div className='investigation-container'>
        <div className="sdsms-container">
      <div className="sdsms-content">
        <h1>WELCOME , INVESTIGATOR</h1>
        <p className="sdsms-description">
        THE SECURE DIGITAL EVIDENCE MANAGEMENT SYSTEM (SDEMS) <br />  ENSURES 
        SECURE ACCESS TO DIGITAL CASE FILES WHILE MAINTAINING <br /> EVIDENCE
        INTEGRITY AND LEGAL COMPLIANCE. WITH ROLE-BASED <br /> AUTHENTICATION, 
        AES-256 ENCRYPTION, AND REAL-TIME AUDIT LOGS, <br /> THE SYSTEM ENABLES 
          TJUDGES, INVESTIGATORS, AND COURT OFFICIALS <br /> TO SECURELY UPLOAD,   
          RETRIEVE, AND VERIFY DIGITAL EVIDENCE. ITS <br /> CHAIN-OF-CUSTODY TRACKING
          ENSURES ALL INTERACTIONS ARE <br /> LOGGED  AND TAMPER-PROOF,
          STRENGTHENING JUDICIAL TRANSPARENCY AND CASE CREDIBILITY.
        </p>
        
        <div className="sdsms-buttons">
          <button className="sdsms-button">UPLOAD EVIDENCE</button>
          <button className="sdsms-button">MY CASES</button>
        </div>
      </div>
      <div className='judge-img'>
    <img src="/img/investigator.jpg" alt="" />
  </div>
            
    </div>


  </div>
 
        

    </section>
  )
}