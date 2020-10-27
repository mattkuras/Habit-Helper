import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import './Toobar.css'
import DrawerToggleButton from '../sideDrawer/DrawerToggleButton'

const Toolbar = props => {

    const history = useHistory()

    const handleClick = () => {
        axios.delete('/logout', {withCredentials: true})
        .then(response => {
          props.handleLogout()
          history.push('/')
        })
        .catch(error => console.log(error))
      }
    return (
        <header className='toolbar'>
        <nav className='toolbar_navigation'>
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='toolbar_logo'><Link to='/'>THE LOGO</Link></div>
            <div className='spacer'></div>
            <div className='toolbar_items'>
                <ul>
                <li><Link className='toolbar_link' to='/'>Home</Link></li>
                    <li> <Link className='toolbar_link' to='/login'>Log In</Link></li>
                    { 
                    props.loggedInStatus ? 
                    <li><Link className='toolbar_link' to='/logout' onClick={handleClick}>Log Out</Link></li> : null
                    }
                </ul>
            </div>
        </nav>
    </header>
    )
}

export default Toolbar 