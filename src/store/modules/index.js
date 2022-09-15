import { configureStore } from '@reduxjs/toolkit'

import favData from './favorites/reducer'

const store = configureStore({
    reducer:{
        favData: favData
    }
})

export default store