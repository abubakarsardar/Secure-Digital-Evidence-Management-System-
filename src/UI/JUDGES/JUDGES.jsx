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
                    <li><NavLink to = '/RBAC' >RBAC</NavLink></li>
                    <li><NavLink to = '/About' >About</NavLink></li>
                    <li><NavLink to = '/Security' >Security</NavLink></li>
                    <li><NavLink to = '/Contact' >Contact</NavLink></li>
                </ul>
            </div>
        </div>

        <div className='judges-content'>
            <h1>JUDGES</h1>
        </div>
        </div>
    </section>
  )
}