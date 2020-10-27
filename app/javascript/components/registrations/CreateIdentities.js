import React, { useEffect, useReducer, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import DropdownCategories from './DropdownCategories'
import './CreateIdentities.css'

    const initialState = {
        category_id: '',
        name: '',
        description: '',
        standard: '' 
    }

    const reducer = (state, { field, value }) => {
        return {
            ...state,
            [field]: value
        }
    }

    const CreateIdentities = () => {
      
        const history = useHistory()

        // get categories for drop down menu
        const [categories, setCategories] = useState([])
        useEffect(() => {
          axios.get('/api/v1/categories',
          {withCredentials: true})
       
        .then(resp => {setCategories(resp.data.data)
        })
        .catch(resp => console.log(resp))
     }, []
     )
    const cats = categories.map(cat => {

      return (
        <DropdownCategories 
        
        key={cat.attributes.name}
        data = {cat}
        />
      )
     })

        const [state, dispatch] = useReducer(reducer, initialState);

        const onChange = (e) => {
            dispatch({field: e.target.name, value: e.target.value})
        }

        const handleSubmit = (event) => {
          console.log(event)
            event.preventDefault()
            const {category_id, name, description, standard} = state
        let identity = {
              category_id: category_id,
              name: name, 
              description: description, 
              standard: standard
            }
             
        axios.post('/api/v1/identities', {identity}, {withCredentials: true})
            .then(response => {console.log(response) 
            
              if (response.statusText == 'OK') {
                history.push('/')
              } else {
                this.setState({
                  errors: response.data.errors
                })
              }
             }
            )
            .catch(error => console.log('api errors:', error))
          };

        const { category_id, name, description, standard } = state 

    return(
        <div className='identity-form'>
            <form >
              <label className='id-label' name='category_id'>Which category does this identity best fit into?</label>
               <select name='category_id' className='id-form-input' onChange={onChange} >
                 <option value='' disabled selected hidden>select one</option>
                 {cats}
               </select>

                <label className='id-label' name='name'>What should we name this identity?<br/>eg. Musician, Reader, Runner, Meditator, etc.</label>
                <input className='id-form-input' name='name' value={name} onChange={onChange}/>
                
                <label className='id-label' name='description'>Description (this is optional)</label>
                <input className='id-form-input description-input' name='description' value={description} onChange={onChange} />
                
                <label className='id-label' name='standard'>How many days a week do you need to participate for YOU to feel like a {state.name}</label>
                <select name='standard' className='id-form-input' id='standard' onChange={onChange}>
                  <option value={0}>0</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                </select>
                <h4>Add another identity</h4>
            </form>
            <button onClick={handleSubmit} className='id-submit-button' placeholder="submit" type="submit">
                 submit
                </button>
        </div>
    )
}

export default CreateIdentities