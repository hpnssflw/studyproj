import { memo } from 'react'

export const CryptoPosition = ({ name, price, symbol, marketcap, volume, image, priceChange }) => {
    console.log('## crypto pos')

    return (
        <div style={{ display: 'flex', gap: '40px', fontWeight: '300', alignItems: 'center' }}>
            <div style={{ display: 'flex' }}>
                <h2>{name}</h2>
            </div>
            <div style={{ display: 'flex', gap: '40px' }}>
                <p className="moeda-price">${price}</p>
                <p className="moeda-volume">${volume.toLocaleString()}</p>

                {priceChange < 0 ? (
                    <p className="moeda-percent red">{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className="moeda-percent green">{priceChange.toFixed(2)}%</p>
                )}
            </div>
        </div>
    )
}
