import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    current:{}
}

const userSlice = createSlice({
    name:"userSlice",
    initialState,//There like its is the same name i can keep just this expression instead of initialState: initialState
    reducers:{
        setCurrentUser: (state,action)=>{
            state.current = action.payload //Advantage of slice is that i can directly modifie the state value and don't make a return
        },
    }

})

export default userSlice.reducer
export const {setCurrentUser} = userSlice.actions