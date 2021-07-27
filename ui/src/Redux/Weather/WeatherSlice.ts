import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface weatherState{
       city:string | null,
       data?:object | undefined | null
}

const initialState:weatherState = {
       city:"",
       data:{}
}
export const weatherSlice = createSlice({
       name:'weather',
       initialState,
       reducers:{
              setQueryCity:(state,action:PayloadAction<string>)=>{
                     state.city = action.payload;
              }
       }
});

export const {setQueryCity} = weatherSlice.actions;

export default weatherSlice.reducer;