import React, { Fragment, useState } from 'react' 
import './StandardIcon.css'
import { useDispatch } from 'react-redux'
import { isChecked, selectCheckbox } from './CheckboxSlice'
import { useSelector } from 'react-redux'


const standardIcon = (props) => {

    const dispatch = useDispatch()

    const checked = useSelector(selectCheckbox)

    const checkedBox = (e) => {
            dispatch(
                isChecked()
              )
      }

    const day = props.day + 1

   let disabledBox;
   if (props.disabled) {
       disabledBox = true
   } else {
       disabledBox = false 
   }

  //  const checkboxId = document.getElementById(`checkbox-${day}`)
  //  const checkBox = useSelector(state => state.checks.find(check => check.id == checkboxId))
   
  //  checkBox && checkBox.checked == true ? checkboxStatus = true : checkboxStatus = false 

  //  let checkboxStatus;


    return(
        <div className='checkbox-container'>
            <label className='checkbox-label'>Day {day}</label>
            <input disabled={disabledBox}  type='checkbox' className='icon' id={`${props.name}checkbox-${day}`} onChange={props.handleChange, checkedBox}/> 
        </div>
    
)}

export default standardIcon