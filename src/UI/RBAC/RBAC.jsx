import { NavLink } from 'react-router-dom';
import './RBAC.css';
import CardSlider from '../../Components/RBAC-CARD/RBAC-CARD';
export const RBAC = () => {

  return (
    <>
    <section className='RBAC'>
        <div className="RBAC-img">
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

        <div className='RBAC-content'>
            <h1>RBAC</h1>
        </div>
        </div>

        <div className='RBAC-cards'>  <CardSlider />  </div>


        </section>
    </>
  )
}