import { NavLink } from 'react-router-dom';
import './JUDGES.css';

export const JUDGES = () => {
  return (
    <section className='judges'>
     <div className="judges-img">
        <div className='Navbar'>
            <div className='logo'>
                <img src="/img/logo.png" alt="logo" />
            </div>
            <div className='nav'>
                <ul>
                <li><NavLink to = '/' >Home</NavLink></li>
                    <li><NavLink to = '/RBAC' >CASE FILES</NavLink></li>
                    <li><NavLink to = '/About' >AUDITLOGS</NavLink></li>
                    <li><NavLink to = '/Security' >SECURITY ALERTS</NavLink></li>
                    <li><NavLink to = '/Contact' >Contact</NavLink></li>
                </ul>
            </div>
        </div>

        <div className='judges-content'>
            <h1>JUDGES</h1>
        </div>
        </div>

<div className='judges-container'>
        <div className="sdsms-container">
      <div className="sdsms-content">
        <h1>WELCOME , JUDGES</h1>
        <p className="sdsms-description">
        THE SECURE DIGITAL EVIDENCE MANAGEMENT SYSTEM (SDSMS) <br /> 
          ENSURES SECURE ACCESS TO DIGITAL CASE FILES WHILE MAINTAINING <br />
          EVIDENCE INTEGRITY AND LEGAL COMPLIANCE. WITH ROLE-BASED <br />
          AUTHENTICATION, AES-256 ENCRYPTION, AND REAL-TIME AUDIT LOGS, <br />
          THE SYSTEM ENABLES JUDGES, INVESTIGATORS, AND COURT  <br /> SECURELY UPLOAD, RETRIEVE, AND VERIFY DIGITAL EVIDENCE. <br />
           ITS CHAIN-OF-CUSTODY TRACKING ENSURES ALL INTERACTIONS ARE <br />
          LOGGED AND TAMPER-PROOF, STRENGTHENING JUDICIAL TRANSPARENCY AND CASE CREDIBILITY.
        </p>
        
        <div className="sdsms-buttons">
          <button className="sdsms-button">ASSIGNED CASES</button>
          <button className="sdsms-button">VIEW EVIDENCE</button>
        </div>
      </div>
      <div className='judge-img'>
    <img src="/img/judges.avif" alt="" />
  </div>
            
    </div>


  </div>
 
        

    </section>
  )
}