import React, { useState, useEffect, Fragment }from 'react'
import Axios from 'axios'
import IdentityCard from './Identity-card'
import Backdrop from '../backdrop/Backdrop'
import IdentityShow from '../IdentityShow/IdentityShow'
import './Dashboard.css'
import { useDispatch } from 'react-redux'
import { addIdentities } from './IdentitiesSlice'

// get identities data from db
// populate state with hooks
const Dashboard = (props) => {
  
    const [identities, setIdentities] = useState([])
    const [idShowOpen, setIdShow] = useState(false)
    const [clickedId, setClickedId] = useState()

    const dispatch = useDispatch()

    const showPageClickHandler = (e) => {
        setClickedId(e.target.id)
        setIdShow(true)
    }
    const backdropClickHandler = () => {
        setIdShow(false)
      }

     useEffect(() => {

        Axios.get(`/api/v1/users/${props.user.id}`)
        .then(resp => {setIdentities(resp.data.included)
        
        identities.length > 0 ? (dispatch(
            addIdentities({
               identities
            })
           )) : null })
        .catch(resp => console.log(resp))
     }, [identities.length])

    //  useEffect(() => {
    //     dispatch(
    //         addIdentities({
    //             identities 
    //         })
    //        )
    //  })

// map identities data from state with Identity Component
     const grid = identities.map(id => {
     return (
     <IdentityCard
        show={idShowOpen}
        clickHandler={showPageClickHandler}
        key={id.attributes.name}
        attributes = {id.attributes}
        />)
    })

      let backdrop;

    if (idShowOpen){
  
      backdrop = <Backdrop click={backdropClickHandler} />
    }


    return(
        // create home div, header, subheader, and grid for above map function
    <div className='home'>
        {idShowOpen ? <IdentityShow user={props.user} show={idShowOpen} id={clickedId}/> : null}
        {backdrop}
        <div className='header'>
            <h1>Atomic Habits</h1>
            <div className='subheader'></div>
        </div> 

        <div className='grid'>
            {grid}
        </div>  
    </div>       
       
    )
}

export default Dashboard