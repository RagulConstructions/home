/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { useRef, useState, forwardRef } from "react";
import emailjs from "@emailjs/browser";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  footer {
    font-size: x-small;
    line-height: 20px;
  }
`;
const Container = styled.div`
  height: 100%;
  max-width: 1400px;
  display: flex;
  gap: 10px;
  width: 90vw;
  justify-content: space-between;
  @media screen and (max-width: 660px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Left = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: center;
  gap: 30px;
  width: 40%;
  padding: 3px;
  /* From https://css.glass */
  background: linear-gradient(
    to right bottom,
    #103f96,
    #0d3a8d,
    #0a3585,
    #07307c,
    #042b74,
    #04276e,
    #032268,
    #021e62,
    #03195d,
    #051458,
    #060e53,
    #07084e
  );
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.2px);
  -webkit-backdrop-filter: blur(7.2px);
  border: 1px solid rgba(10, 0, 138, 1);
  @media screen and (max-width: 660px) {
    width: 100%;
    height: 30%;
    order: 2;
    flex-direction: row;
    gap: 20px;
  }
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  form {
    gap: 25px;
    display: flex;
    width: 70%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media screen and (max-width: 660px) {
    width: 100%;
    height: 55%;
    order: 1;
  }
`;
const Logo = styled.img`
  height: 90px;
  @media screen and (max-width: 660px) {
    height: 40px;
  }
`;
const Divc = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;
const Contacttxt = styled.h2`
  font-weight: 500;
  font-size: 18px;
  margin-bottom: 25px;
  letter-spacing: 0;
  padding: 0 0 20px 0;
  line-height: 35px;
  border-bottom: 2px solid #f7ca44;
  color: #f7ca44;
  @media screen and (max-width: 660px) {
    font-size: 12px;
  }
`;
const Texts = styled.h4`
  a {
    color: white;
    text-decoration: none;
  }
  line-height: 30px;
  @media screen and (max-width: 660px) {
    font-size: 12px;
  }
`;
const Title = styled.h1`
  font-weight: 200;
  align-self: flex-start;
  color: #f7ca44;
`;
const Inputs = styled.input`
  width: 100%;
  height: 20px;
  background-color: #d5eeff;
  border-radius: 5px;
  border: none;
  padding: 4px;
`;
const Tarea = styled.textarea`
  width: 100%;
  background-color: #d5eeff;
  //height: 20px;
  border-radius: 5px;
  border: none;
  padding: 4px;
`;
const Btn = styled.button`
  margin-left: 15px;
  font-size: 0.9em;
  width: 30%;
  cursor: pointer;
  padding: 5px;
  border-radius: 8px;
  border: 0.5px solid #8236cb;
  background-color: #f7ca44;
  color: #994D1C;
`;
// const form= styled.form`
// gap: 30px;
// display:flex;
// width: 70%;
// align-items: center;
// justify-content: center;
// flex-direction: column;
// `

const Contact = ({txt},ref) => {
  const form = useRef();
  const [succes, setSucces] = useState(null);
  const sendEmail = (e) => {
    e.preventDefault();

  
 
   emailjs.sendForm('service_v1bel8s', 'template_7k1adsc', form.current, 'ImV2HhBVWI1jG0VET')
      .then((result) => {
          console.log(result.text);
          setSucces(true);
      }, (error) => {
          console.log(error.text);
          setSucces(false);
      });
  };

  return (
    <Section ref={ref}>
      <Container id="middle">
        <Left>
          <Logo src="./img/IMG.PNG" />
          <Divc>
            <Contacttxt>CONTACT</Contacttxt>
            <Texts>
              JAGATHRATCHAGAN
              <br />
              <a href="tel:+919443602457">+91 9443602457</a>
              <br />
              <a href="mailto:constructionsragul@gmail.com">
                constructionsragul@gmail.com
              </a>
            </Texts>
          </Divc>
        </Left>
        <Right>
          <form  ref={form} onSubmit={sendEmail}>
            <Title>Contact Us </Title>
            <Inputs required placeholder="Name" name="name" />
            <Inputs required type="email" placeholder="Email" name="email" />
            <Inputs required type="number" placeholder="Phone number" name="number" />
            <Tarea required placeholder="Write your message" name="message" rows={5} />
            <Btn type="submit" value="Send">Submit</Btn>
            {succes &&
              "Your message has been sent. We'll get back to you soon."}
          </form>
        </Right>
      </Container>
      <footer>
        © Copyright 2024 Rahul Construction
        <br />
        Web Developed by Pushparaj L
      </footer>
    </Section>
  );
};

export default forwardRef(Contact);
