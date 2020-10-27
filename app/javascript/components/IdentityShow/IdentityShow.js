import React, {useState, useEffect } from 'react'
import axios from 'axios'
import './identity'
import StandardIcon from './StandardIcon.js'


const IdentityShow = (props) => {

    const [identity, setIdentity] = useState({})
    const [checkedDay, setCheckedDay] = useState(0)




     useEffect(() => {
        axios.get(`/api/v1/identities/${props.id}`)
        .then(resp => {
            setIdentity(resp.data.data.attributes)
        })
        .catch(resp => console.log(resp)
        )}, [])



        const updateDays = (e) => {
            e.target.checked ? setCheckedDay( checkedDay + 1) : setCheckedDay( checkedDay - 1)
        }


    // icons for days of the week
    const standardIcons = () => {
        let array = []
        for (let count = 0; count < identity.standard; count++) {
            count < identity.disabled_boxes ? 
            array.push(<StandardIcon disabled={'disabled'} user={props.user} name={identity.name} key={count} day={count} handleChange={updateDays}/>) : 
            array.push(<StandardIcon key={count} day={count} user={props.user} name={identity.name} handleChange={updateDays}/>)
        }
        return array
    }


    return(
    
       <div className='show-page'>
           <div className='id-title'> <h1 id='id-name'>{identity.name}</h1> </div>
           <div className='id-details'>{identity.description}</div>
           <div className='identity-image'><img id='img' src={identity.image}/></div>
           <div className='id-this-week'>{standardIcons()}</div>
           <div className='id-rate'><h2>{identity.consistency}%</h2></div>
       </div>
    )
}

export default IdentityShow