/* eslint-disable no-unused-vars */
import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import House from './House'
import styled from 'styled-components'

const DDiv =styled.div`
height: 80%;
width: 80%;
margin: auto;

`

const Hcanvas = () => {
  return (
    //<DDiv>
    <Canvas>
    <Stage  environment="city" intensity={0.6}  >
    <House />
    </Stage>
        <OrbitControls  enableZoom={false} autoRotate />
    </Canvas>
    //</DDiv>
  )
}

export default Hcanvas