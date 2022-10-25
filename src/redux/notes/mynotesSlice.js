import { createSlice } from "@reduxjs/toolkit";

export const mynotesSlice = createSlice({
  name: "mynotes",
  initialState: {
    notes: JSON.parse(localStorage.getItem("notes"))?JSON.parse(localStorage.getItem("notes")):[],
    filterednotes:[]
        
    ,
  },
  reducers: {
    addNote: (state, aciton) => {
      state.notes.push(aciton.payload);
      state.filterednotes=state.notes
      localStorage.setItem("notes",JSON.stringify( state.notes))
    },
    deleteNote: (state, aciton) => {
       const id=aciton.payload    
      state.notes=state.notes.filter((item)=>item.id!==id) ;
      state.filterednotes=state.notes
      localStorage.setItem("notes",JSON.stringify( state.notes))
    },
    filterNote: (state, aciton) => {
       const searchinput=aciton.payload   
       const filtered=state.notes.filter((item)=>{ return item.title.indexOf(searchinput)!==-1 })
      state.filterednotes=filtered ;
      localStorage.setItem("notes",JSON.stringify( state.notes))
    },
  },
});
export const { addNote,deleteNote ,filterNote} = mynotesSlice.actions;
export default mynotesSlice.reducer;
