import { createSlice, PayloadAction } from '@reduxjs/toolkit';
  
    
  const initialState = {
    favorite: []
  }
  
  const FavData = createSlice({
    name: 'favData',
    initialState,
    reducers: {
      addNewFavorite: (state, action) => {
        state.favorite = [...state.favorite, action.payload]   
      },
      removeFavorite: (state, action) => {
        
        let remove = state.favorite.filter((item) => item.id !== action.payload.id)
        state.favorite = remove
      },
    }
  })
  
  export const { addNewFavorite } = FavData.actions;
  
  export const { removeFavorite } = FavData.actions;
  
  export const favStateData = (state) => state.favorite.favorite;
  
  export default FavData.reducer;