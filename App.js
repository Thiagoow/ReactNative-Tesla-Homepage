import React from 'react'
import styled from 'styled-components/native'
import { Text } from 'react-native'

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`

export default function App() {
  return (
    <Container>
      <Text>Hello world :D</Text>
    </Container>
  )
}
