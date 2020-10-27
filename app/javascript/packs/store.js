import { configureStore } from '@reduxjs/toolkit'
import checkedReducer from '../components/IdentityShow/CheckboxSlice.js'
import identitiesReducer from '../components/home/IdentitiesSlice.js'


export default configureStore({
  reducer: {
    checked: checkedReducer,
    identities: identitiesReducer
  }
})