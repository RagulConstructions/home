/* eslint-disable react/prop-types */
import styled from 'styled-components'
//import Contact from './Contact'

const Section = styled.div`
  display:flex;
  justify-content: center;
  
`
const Container = styled.div`
width: 90vw;
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 10px 10px;
  background: rgba( 255, 255, 255, 0.1 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 0px );
  -webkit-backdrop-filter: blur( 0px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
`
const Links = styled.div`
 display: flex;
 align-items: center;
 gap: 30px;
`
const Logo = styled.img`
 height: 55px;
 cursor:pointer;
`
const List = styled.ul`
 display: flex;
 gap: 20px;
 list-style: none;
 
`
const ListItem = styled.li`
 cursor: pointer;
 font-size: 1.2em;
 @media screen and (max-width: 660px){
    display: none;
}
`
const Button = styled.button`
  cursor: pointer;
  padding: 10px;
  border-radius:10px;
  border:0.5px solid #5B0888 ;
  background-color:#9400FF;
  color: white;
  width: 100px;
`
const Icons = styled.div`
 display: flex;
 align-items: center;
 gap: 30px;
`
const Navbar = ({handle1,handle2,handle3}) => {
  return (
    <Section>
        <Container>
            <Links>
                <Logo onClick={handle3} src="./img/IMG.PNG"/>
                <List>
                    <ListItem  >Home</ListItem>
                    <ListItem onClick={handle1} >Works</ListItem>
                    <ListItem onClick={handle2} >Gallery</ListItem>
                    <ListItem onClick={handle3} >Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Button  onClick={handle3} >Hire Now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar