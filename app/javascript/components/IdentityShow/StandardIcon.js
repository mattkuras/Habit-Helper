import React, { Fragment, useState, useEffect } from 'react' 
import './StandardIcon.css'


const standardIcon = (props) => {

    const [check, setCheck] = useState(props.checked_box)

    const day = props.day + 1

//    let disabledBox;
//    if (props.disabled) {
//        disabledBox = true
//    } else {
//        disabledBox = false 
//    }

   
//    useEffect(() => {
//     if (props.checked_box) {
//         setCheck(true)
//      }
//     //  else {
//     //      setCheck(false)
//     //  }
//    })

   const controlCheckBox = () => {
    check ? setCheck(false) : setCheck(true);
   }



    return(
        <div className='checkbox-container'>
            <label className='checkbox-label'>Day {day}</label>
            <input checked={check}  type='checkbox' className='icon' id={`${props.name}checkbox-${day}`} onClick={controlCheckBox} onChange={props.handleChange}/> 
        </div>
    
)}

export default standardIcon