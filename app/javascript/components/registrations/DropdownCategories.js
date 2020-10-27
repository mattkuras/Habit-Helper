import React from 'react'
import './CreateIdentities.css'

const DropwdownCategories = (props) => {

    const cats = props.items

    return (
            <option id='drop-down-categories'  value={props.data.id}>{props.data.attributes.name}</option>
    )
}

export default DropwdownCategories