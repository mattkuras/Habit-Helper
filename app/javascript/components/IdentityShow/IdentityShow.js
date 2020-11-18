import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './IdentityShow.css'
import StandardIcon from './StandardIcon.js'
import { useHistory } from 'react-router-dom'



const IdentityShow = (props) => {

    const [identity, setIdentity] = useState({})
    const [checkedDays, setCheckedDays] = useState()




    useEffect(() => {
        axios.get(`/api/v1/identities/${props.id}`)
            .then(resp => {
                setIdentity(resp.data.data.attributes)
                setCheckedDays(resp.data.data.attributes.checked_boxes)
            })
            .catch(resp => console.log(resp)
            )
    }, [])



    const updateDays = (e) => {
        e.target.checked ? setCheckedDays(checkedDays + 1) : setCheckedDays(checkedDays - 1)
    }

    const updateCheckedBoxes = () => {
        axios.patch(`/api/v1/identities/${props.id}`, { checked_boxes: checkedDays }, { withCredentials: true })
        props.close()
    }

    const deleteIdentity = () => {
        const callBack = () => {
            const newState = props.identities.filter((item) => item.id !== props.id)
            props.setIdentities(newState)
        }
        axios.delete(`/api/v1/identities/${props.id}`, { withCredentials: true })
            .then(resp => {
                if (resp.data.status == 200){
                    callBack()
                }
                else {console.log('there was an error deleting the identity')}
            })
        props.close()

    }

    const history = useHistory()

    // icons for days of the week
    const standardIcons = () => {
        let array = []
        for (let count = 0; count < identity.standard; count++) {
            // count < identity.disabled_boxes ? 
            count < identity.checked_boxes ?
                // array.push(<StandardIcon disabled={'disabled'} user={props.user} name={identity.name} key={count} day={count} handleChange={updateDays}/>) : 
                array.push(<StandardIcon checked_box={true} user={props.user} name={identity.name} key={count} day={count} handleChange={updateDays} />) :
                array.push(<StandardIcon checked_box={false} key={count} day={count} user={props.user} name={identity.name} handleChange={updateDays} />)
        }
        return array
    }


    return (

        <div className='show-page'>

            <div className='id-title'> <h1 id='id-name'>{identity.name}</h1> </div>
            <div className='id-details'>{identity.description}</div>
            <div className='identity-image'><img id='img' src={identity.image} /></div>
            <div className='id-this-week'>{standardIcons()}
                <button className='update-id-button' onClick={updateCheckedBoxes}>Save</button>
            </div>
            <div className='id-rate'><h2>{identity.consistency}%</h2></div>
            <button className='delete-id-button' onClick={deleteIdentity}>Delete Identity</button>

        </div>
    )
}

export default IdentityShow