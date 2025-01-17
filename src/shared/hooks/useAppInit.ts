import axios from 'axios'
import { useEffect, useState } from 'react'

export function useAppInit() {
      const [list, setList] = useState<any>(null)

      useEffect(() => {
            const cryptoPrices = localStorage.getItem('cryptos')
            if (cryptoPrices) setList(JSON.parse(cryptoPrices))
            else
                  axios.get(
                        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
                  )
                        .then((response) => {
                              setList(response.data)
                              const p = JSON.stringify(response.data)
                              // test issue
                              localStorage.setItem('cryptos', p)
                        })
                        .catch((error) => {
                              console.error('Error fetching data', error)
                        })
      }, [])

      return { list }
}
