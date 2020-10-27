import React, { Fragment } from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'
import './Identity-card.css'
const Identity = (props) => {

    const id = props.attributes.id

    return(
        <Fragment>
            {/* <Link to={`/identities/${props.attributes.id}`} > */}
                <div id={id}className='identity-card' onClick={props.clickHandler}>
                    <div id={id} className="id-name card-item" onClick={props.clickHandler}>{props.attributes.name}</div>
                    <div id={id} className="id-standard card-item" onClick={props.clickHandler}>{props.attributes.standard} days a week</div>                   
                    <div id={id} className="id-image card-item" onClick={props.clickHandler}><img id={id} src={props.attributes.image}/> </div>
                    <div id={id} className="id-consistency card-item" onClick={props.clickHandler}>{props.attributes.consistency}%</div>
                </div>
            {/* </Link> */}
        </Fragment>
       
    )
}

export default Identity