import React, { Fragment, useState, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Dashboard from './home/Dashboard'
import IdentityShow from './IdentityShow/IdentityShow'
import Toolbar from './toolbar/Toolbar.js'
import SideDrawer from './sideDrawer/SideDrawer'
import Backdrop from './backdrop/Backdrop'
import axios from 'axios'
import Login from './registrations/Login'
import Signup from './registrations/Signup'
import CreateIdentities from './registrations/CreateIdentities'
import sideDrawer from './sideDrawer/SideDrawer'

const App = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState({})
    const [sideDrawerOpen, setSideDrawer] = useState(false)
    
     useEffect(() => {
         loginStatus()
        }, [])

        // function that open and close side drawer 
    const drawerHandleClick = () => {
      setSideDrawer(true)
    }
    const backdropClickHandler = () => {
      setSideDrawer(false)
    }

    // functions that handle login 
        const loginStatus = () => {
          axios.get('/logged_in', 
          {withCredentials: true})
          .then(response => {
              setUser(response.data.user)
            if (response.data.logged_in) {
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
          })
          .catch(error => console.log('api errors:', error))
        }

      const handleLogin = (data) => {
            setIsLoggedIn(true)
            setUser(data.user)
        }
      const handleLogout = () => {
         setIsLoggedIn(false)
         setUser({})
        }


    let backdrop;

    if (sideDrawerOpen){
  
      backdrop = <Backdrop click={backdropClickHandler} />
    }


    return(
        <div id='app' style={{height: '100%'}}>
              <Toolbar drawerClickHandler= {drawerHandleClick}
              loggedInStatus={isLoggedIn}
              handleLogout={handleLogout}/>
              <SideDrawer show={sideDrawerOpen}/>
              {backdrop}
        <main style={{marginTop: '90px'}}>
          <Switch>
            
            <Route exact path='/' render={props => (
                  <Dashboard {...props} user={user} loggedInStatus={isLoggedIn} />                
              )}>
                {isLoggedIn ? null : <Redirect to="/login" />}
              </Route>

              <Route exact path='/identities/new' component={CreateIdentities}/>

              {/*  */}

              <Route exact path='/login' 
                render={props => (
                <Login {...props} handleLogin={handleLogin} loggedInStatus={isLoggedIn}/>
                )}>
                  {isLoggedIn ? <Redirect to="/" /> : null}
              </Route>
                
              <Route exact path='/signup' 
                render={props => (
                <Signup {...props} handleLogin={handleLogin} loggedInStatus={isLoggedIn}/>
                )}>
              {/* {isLoggedIn ? null : <Redirect to="/signup" />} */}
              </Route>
            </Switch>
          </main>
              
          
        </div> 
    )
}

export default App