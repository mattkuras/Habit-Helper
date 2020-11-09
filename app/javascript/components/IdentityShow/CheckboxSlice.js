import { createSlice } from '@reduxjs/toolkit'
const initialState = []
  
  const checkedSlice = createSlice({
    name: 'checked',
    initialState,
    reducers: {
      isChecked: {
        reducer(state, action) {
          state.push(action.payload)
        },
        prepare(checkboxId,){
          return{
            payload: {
              title,
              content,
              user: userId
            }
          }
        }
      }
    }
  })
  
  export const { isChecked } = checkedSlice.actions
  export const selectCheckbox = state => state.checked
  export default checkedSlice.reducer
