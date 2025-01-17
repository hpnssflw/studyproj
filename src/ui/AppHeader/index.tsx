import { Flex } from 'antd'
import reactLogo from '../../assets/react.svg'
import egar from '../../assets/egar.png'

import viteLogo from '/vite.svg'

function AppHeader() {
      return (
            <Flex gap="middle" align="center">
                  <a href="https://react.dev" target="_blank">
                        <img src={egar} className="logo" alt="React logo" style={{ height: '40px' }} />
                  </a>
                  <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
                  <a href="https://vite.dev" target="_blank">
                        <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
            </Flex>
      )
}

export default AppHeader
