/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components'
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { forwardRef } from 'react';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.div`
  height: 100%;
  max-width:1400px ;
  display: flex;
  width: 90vw;
  justify-content: space-between;
  @media screen and (max-width:660px) {
    flex-direction:column;
    align-items: center;
  }
`
const Left =styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
gap:30px;
width: 50%;
padding: 3px;
@media screen and (max-width:660px) {
    width: 100%;
    height: 65%;
    gap: 20px;
  }
`

const Right=styled.div`
height: 100%;
display: flex;
position: relative;
align-items: center;
justify-content: center;
width: 50%;
@media screen and (max-width:660px) {
    width: 100%;
    height: 35%;
  }
`
const Atxt=styled.h1`
margin-bottom: 15px;
border-bottom: 2px solid #F7CA44;
line-height: 30px;
@media screen and (max-width: 660px){
    font-size: 1.2rem;
}`
const Btxt=styled.h3`
@media screen and (max-width: 660px){
    font-size: 1rem;
}`
const Ptxt=styled.p`
@media screen and (max-width: 660px){
    display: none;
}
`
const Ctxt=styled.p`
color: #CDF5FD;
margin-top: 20px;
@media screen and (max-width: 660px){
    font-size: 0.9rem;
}
`

const Cdiv =styled.div`
z-index: 2;
height:48% ;
padding-top: 40px;
position: relative;
@media screen and (max-width: 660px){
    height:100%;
    width: 100%;
}
`
const Img=styled.img`
  height: 300px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    height: 250px;

  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;



const Who = ({txt},ref) => {
  return (
    <Section ref={ref}>
      <Container>
        <Left>
          <Atxt>Explore the breadth of our craftsmanship at Rahul Construction:</Atxt>
          <Btxt>Dream Homes</Btxt>
          <Ptxt>Crafting living spaces that redefine comfort and elegance.</Ptxt>
          <Btxt>Inspiring Buildings</Btxt>
          <Ptxt> Designing structures that stand tall, blending innovation and aesthetics.</Ptxt>
          <Btxt>Luxurious Resorts</Btxt>
          <Ptxt>Building resorts that blend luxury with nature's beauty.</Ptxt>
          <Btxt>Commercial Spaces</Btxt>
          <Ptxt>Constructing environments that foster productivity and leave a lasting impression.</Ptxt>
          <Btxt>Custom Projects</Btxt>
          <Ptxt>Tailoring projects to match your unique needs and style.</Ptxt>
          <Ctxt>At Rahul Construction, our diverse expertise extends beyond these categories, with each project reflecting our unwavering commitment to precision and excellence.</Ctxt>
        </Left>



        <Right>
        <Cdiv>
        <Canvas className='c'>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#EEEDED"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src='./img/c.png'/>
        </Cdiv>
        
        </Right>




      </Container>
    </Section>
  )
}

export default forwardRef(Who);