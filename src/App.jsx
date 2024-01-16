/* eslint-disable no-unused-vars */
import {useRef} from 'react'
import Hero from './components/Hero'
import Works from './components/Works'
import Who from './components/Who'
import Contact from './components/Contact'
import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  color: white;
  scroll-behavior: smooth;
  overflow-y: auto;
  background:url("./img/background.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  scrollbar-width:none;
  &::-webkit-scrollbar{
    display: none;
  }
`

const App = () => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const handle1 =()=>{
    ref1.current?.scrollIntoView({behavior:'smooth'});
  }
  const handle2 =()=>{
    ref2.current?.scrollIntoView({behavior:'smooth'});
  }
  const handle3 =()=>{
    ref3.current?.scrollIntoView({behavior:'smooth'});
  }

const txt ='hii';

  return (
    <Container>
      <Hero handle1={handle1} handle2={handle2} handle3={handle3} />
      <Who ref={ref1} txt={txt}/>
      <Works ref={ref2} txt={txt} />
      <Contact ref={ref3} txt={txt} />
    </Container>
  )
}

export default App