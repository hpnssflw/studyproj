import { Flex, Card, Input, Button } from 'antd'
import { useState } from 'react'

const cardStyle: React.CSSProperties = {
      width: 620,
      border: 'none',
}

function URLTask() {
      const [urlValue, setUrlValue] = useState('')
      const [URLchecked, setURLChecked] = useState(false)

      const COINS_URL = 'https://rest.coinapi.io'

      // console.log('out of fn', urlValue)

      const handleURLValue = (e) => {
            setUrlValue(e.currentTarget.value)
            console.log('in fn', urlValue)
      }

      const handleCheckURL = (v?: string) => {
            setURLChecked(urlValue === COINS_URL)
      }

      return (
            <Flex align="center" gap="large">
                  {URLchecked ? <span>Great, URL founded!</span> : <span>Find URL!</span>}
                  <Card hoverable style={cardStyle}>
                        <Flex gap="middle" justify="center" align="center" flex={0}>
                              <Input placeholder="Basic usage" value={urlValue} onChange={handleURLValue} />
                              <Button onClick={() => handleCheckURL()}>Start</Button>
                        </Flex>
                  </Card>
            </Flex>
      )
}

export default URLTask
