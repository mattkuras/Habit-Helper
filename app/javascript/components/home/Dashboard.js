import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'
import IdentityCard from './Identity-card'
import Backdrop from '../backdrop/Backdrop'
import IdentityShow from '../IdentityShow/IdentityShow'
import './Dashboard.css'

// get identities data from db
// populate state with hooks
const Dashboard = (props) => {

    const [identities, setIdentities] = useState([])
    const [idShowOpen, setIdShow] = useState(false)
    const [clickedId, setClickedId] = useState()
    const [loaded, setLoaded] = useState(false)


    const showPageClickHandler = (e) => {
        setClickedId(e.target.id)
        setIdShow(true)
    }
    const backdropClickHandler = () => {
        setIdShow(false)
    }

    useEffect(() => {
        Axios.get(`/api/v1/users/${props.user.id}`)
            .then(resp => {
                setIdentities(resp.data.included)
            }).then(identities.length > 0 ? setLoaded(true) : console.log('didnt get ids yet'))
            .catch(resp => console.log(resp))
    }, [identities.length])



    let backdrop;

    if (idShowOpen) {

        backdrop = <Backdrop click={backdropClickHandler} />
    }
    const grid = identities.map(id => {
        return (
            <IdentityCard
                show={idShowOpen}
                clickHandler={showPageClickHandler}
                key={id.attributes.name}
                attributes={id.attributes}
            />)
    })


    return (

        <div className='home'>
            {idShowOpen ? <IdentityShow user={props.user}
                identities={identities}
                setIdentities={setIdentities}
                show={idShowOpen}
                id={clickedId}
                close={backdropClickHandler} /> : null}
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