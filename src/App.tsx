import { memo, lazy, Suspense, useEffect, useState } from 'react'
import { Flex } from 'antd'

import CryptosTask from './components/CryptosTask'
import URLTask from './components/URLTask'
import Onboarding from './components/FormTask'

import reactLogo from './assets/react.svg'
import egar from './assets/egar.png'
import viteLogo from '/vite.svg'

import Loader from './ui/Loader'
// import AppHeader from './ui/AppHeader/index.js'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setCryptos } from './store/slices/cryptoSlice.js'
import { Chart } from './components/Chart/index.js'

export interface OnboardingURL {
      value: string
      success: boolean
      msg: string
}

const CryptosTaskLazy = lazy(() => import('./components/CryptosTask'))
const CryptosMemo = memo(CryptosTaskLazy)

function App() {
      console.log('1')

      useEffect(() => {
            console.log('2')
      }, [])

      const [count, setCount] = useState(0)

      useEffect(() => {
            const t = setInterval(() => {
                  setCount((prev) => prev + 1)
            }, 2000)

            return () => clearInterval(t)
      }, [])

      // task
      const { cryptos } = useSelector((state) => state.crypto)
      const dispatch = useDispatch()

      const getItems = () => {
            const items = localStorage.getItem('cryptos')
            if (items) return JSON.parse(items)
      }

      useEffect(() => {
            dispatch(setCryptos(getItems()))
      }, [dispatch])

      return (
            <Flex vertical gap="middle">
                  <AppHeader count={count} />
                  <Flex gap="middle" justify="flex-start" style={{ height: '100%' }}>
                        <Flex vertical gap="middle">
                              <URLTask />
                              <Onboarding />
                              <Chart cryptos={cryptos} />
                        </Flex>
                        <Suspense fallback={<Loader />}>
                              <CryptosMemo />
                        </Suspense>
                  </Flex>
            </Flex>
      )
}

export default App

function AppHeader({ count }: { count?: number }) {
      console.log('3')

      useEffect(() => {
            console.log('4')
      }, [])

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

                  {/* <p>{count}</p> */}
                  <EffectExample />
            </Flex>
      )
}

function EffectExample() {
      console.log('5')

      useEffect(() => {
            console.log('6')
      }, [])

      return <span>:)</span>
}
