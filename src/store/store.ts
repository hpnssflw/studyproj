import { configureStore } from '@reduxjs/toolkit'
import cryptoReducer from './slices/cryptoSlice.js'

const store = configureStore({
      reducer: {
            crypto: cryptoReducer,
      },
})

export default store
