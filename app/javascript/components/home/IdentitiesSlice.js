import { createSlice } from '@reduxjs/toolkit'
const initialState = []
  
  const identitiesSlice = createSlice({
    name: 'identities',
    initialState,
    reducers: {
        addIdentities(state, action) {
          state.push(action.payload)
        }
    }
  })
  
  export const { addIdentities } = identitiesSlice.actions
  export const selectIdentities = state => state.identities
  export default identitiesSlice.reducer
