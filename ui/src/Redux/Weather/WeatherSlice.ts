import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface weatherState{
       city:string | null,
       data?:object | undefined | null
}

const initialState:weatherState = {
       city:"",
       data:null
}
export const weatherSlice = createSlice({
       name:'weather',
       initialState,
       reducers:{
              setQueryCity:(state,action:PayloadAction<string>)=>{
                     state.city = action.payload;
              },
              setWeatherData:(state,action:PayloadAction<weatherState>)=>{
                     state.data = action.payload;
              }
       }
});

export const {setQueryCity,setWeatherData} = weatherSlice.actions;

export default weatherSlice.reducer;