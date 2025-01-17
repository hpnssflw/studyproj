import { useCallback } from 'react'
import { useAppInit } from '../../shared/hooks/useAppInit'
import { CryptoPosition } from '../CryptoPosition'

const CryptosTask = () => {
      const { list } = useAppInit()

      const getCryptoPositions = useCallback(
            (list) => {
                  return (
                        <ul>
                              {list?.map((moeda) => (
                                    <li key={moeda.id}>
                                          <CryptoPosition
                                                name={moeda.name}
                                                price={moeda.current_price}
                                                symbol={moeda.symbol}
                                                marketcap={moeda.total_volume}
                                                volume={moeda.market_cap}
                                                image={moeda.image}
                                                priceChange={moeda.price_change_percentage_24h}
                                          />
                                    </li>
                              ))}
                        </ul>
                  )
            },
            [list]
      )

      return list && getCryptoPositions(list)
}

export default CryptosTask
