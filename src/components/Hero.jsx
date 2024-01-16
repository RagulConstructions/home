/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import styled from 'styled-components'
import Navbar from './Navbar'
import Hcanvas from './Hcanvas'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
const Container = styled.div`
  height: 100vh;
  max-width:1400px ;
  padding-bottom: 50px;
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
width: 60%;
padding: 3px;
@media screen and (max-width:660px) {
    width: 100%;
    height: 60%;
    gap: 20px;
  }
`

const Right=styled.div`
height: 100%;
width: 40%;
@media screen and (max-width:660px) {
    width: 55%;
    height: 40%;
  }
`

const Welcome=styled.h1`
font-size: 2.3em;
text-shadow: 4px 4px 7px rgba(0,0,0,0.98);

@media screen and (max-width:660px) {
    font-size: 1.3em;
  }
`
const Desc=styled.h3`
font-size: 1.3em;
line-height: 1.6;
color: #DDDDDD;
@media screen and (max-width:660px) {
    font-size: 1em;
  }
`
const Go=styled.p`
font-size: 1em;
@media screen and (max-width:660px) {
    font-size: 0.8em;
  }
`
const Gobtn=styled.button`
margin-left: 15px;
font-size: 0.9em;
width: 30%;
cursor: pointer;
  padding: 5px;
  border-radius:8px;
  border:0.5px solid #8236CB ;
  text-shadow: 4px 4px 7px rgba(0,0,0,0.98);
      background-color:#f7ca44;
  color: white;
  //font-style:bold;
`


const Hero = ({handle1,handle2,handle3}) => {
  return (
    <Section>
      <Navbar handle1={handle1} handle2={handle2} handle3={handle3} />
      <Container>
        <Left>
          <Welcome>Welcome to Rahul Construction,<br/> where dreams take shape and spaces come to life. </Welcome>
          <Desc> We don't just build structures;<br/> we craft homes,<br/> design buildings,<br/> and create havens for unforgettable moments.</Desc>
          <Go> Let us build the foundation for your dreams</Go>
          <Gobtn onClick={handle2}>Our works !</Gobtn>
        </Left>
        <Right>
          <Hcanvas/>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero