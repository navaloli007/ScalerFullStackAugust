import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


//API call to fetch movies 

console.log(import.meta.env);

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (pageNumber)=>{
        console.log("making an API call");
     const res = await fetch(`${import.meta.env.VITE_MOVIES_BACKEND_URL}${pageNumber}`); 
     if(!res.ok){
        throw new Error("Failed to fetch movies");
     }
    return res.json();
    }
)



const moviesSlice = createSlice({
    name:'movies',
    initialState:{
        movies:[],
        loading:null,
        pageNumber:1
    },
    reducers:{
        nextPageFn : (state)=>{
            state.pageNumber+=1;
        },
        previousPageFn : (state)=>{
            state.pageNumber-=1;
        }

    },
    extraReducers: (builder)=>{
        builder.addCase(fetchMovies.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchMovies.fulfilled,(state,action)=>{
            console.log("fulfilled");
            console.log(action.payload);

            state.loading = false;
            state.movies = action.payload.results;
        })
        .addCase(fetchMovies.rejected,(state,dispatch)=>{
            console.log("rejected");
        })

    }

})

export const {nextPageFn, previousPageFn} = moviesSlice.actions;


export default moviesSlice.reducer;