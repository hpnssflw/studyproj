import { Card, Flex, Input } from 'antd'
import { useEffect, useState } from 'react'

function Onboarding() {
      const [name, setName] = useState('')
      const [surname, setSurname] = useState('')
      // const [age, aetAge] = useState('')
      // const [city, setCity] = useState('')

      // task
      useEffect(() => {
            if (name || surname) handleSomeRequest(name + surname)
      }, [name, surname])

      const handleSomeRequest = async (data: string) => {
            await fetch('123.com', {
                  method: 'POST',
                  body: data,
            })
      }

      const handleChange = (e, setter) => {
            setter(() => ({ [e.target.name]: e.target.value }))
      }

      return (
            <Card>
                  <Flex gap="middle">
                        <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
                        <Input placeholder="Email" onChange={(e) => setSurname(e.target.value)} />
                  </Flex>
            </Card>
      )
}

export default Onboarding
