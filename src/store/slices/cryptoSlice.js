import { createSlice } from '@reduxjs/toolkit'

const brightColors = [
      '#FF5733', // Bright Red
      '#FF33FF', // Bright Magenta
      '#33FF57', // Bright Green
      '#33FFFF', // Bright Cyan
      '#FFBF00', // Bright Orange
      '#FF00BF', // Bright Pink
      '#00BFFF', // Bright Sky Blue
      '#FF69B4', // Bright Hot Pink
      '#7FFF00', // Bright Chartreuse
      '#FF7F50', // Bright Coral
      '#9FE2BF', // Bright Sea Green
      '#DE3163', // Bright Rose
      '#40E0D0', // Bright Turquoise
      '#FFDB58', // Bright Yellow
      '#BA55D3', // Bright Medium Orchid
      '#FA8072', // Bright Salmon
      '#8FBC8F', // Bright Dark Sea Green
      '#FFA07A', // Bright Light Salmon
      '#9400D3', // Bright Violet
      '#FFD700', // Bright Gold
]

const initialState = {
      cryptos: [],
      active: null,
}

const cryptoSlice = createSlice({
      name: 'crypto',
      initialState,
      reducers: {
            setCryptos: (state, action) => {
                  state.cryptos = action.payload
                        .map((i, index) => ({
                              name: i.id,
                              value: Number(i.current_price?.toFixed(1)),
                              fill: brightColors.reverse()[index],
                              dataFull: i,
                        }))
                        .filter((i) => i.name !== 'bitcoin')
            },
            addCrypto: (state, action) => {
                  state.cryptos.push(action.payload)
            },
            removeCrypto: (state, action) => {
                  state.cryptos = state.cryptos.filter((crypto) => crypto.id !== action.payload.id)
            },
            setActive: (state, action) => {
                  state.active = action.payload
            },
      },
})

export const { setCryptos, addCrypto, removeCrypto, setActive } = cryptoSlice.actions

export default cryptoSlice.reducer
