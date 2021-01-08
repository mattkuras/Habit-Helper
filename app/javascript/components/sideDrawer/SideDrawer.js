import React, {useState, useEffect} from 'react'
import './SideDrawer.css'
import { Link } from 'react-router-dom'


const sideDrawer = props => {

    const [ids, setIds] = useState([])
    let idList
    

    // idList = ids.length > 0 ? ids.map(id => {
    //     <li key={id.id}>{id.name}</li>
    //     }) : console.log('not working')
    

    // identities.length > 0 ? console.log('its working') : console.log('its not working')

    let drawerClasses = 'side-drawer'
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }


return (
    <nav className={drawerClasses}>
        <ul>
            <li><Link to='/identities/new'>add an identity</Link></li>
           {
               ids ? ids.map(id => (
                <li key={id.id}>{id.name}</li>)) : null
           }
        </ul>
    </nav>
)
}

export default sideDrawer