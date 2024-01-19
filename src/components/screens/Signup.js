import React,{useState,useContext} from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Signup() {
  return (
    <Container>
        <LeftContainer>
            <HeaderContainer>
                <Logo src= {require("../image/logo.png")}
                />
            </HeaderContainer>
        </LeftContainer>
        <Logintitle>
            <LoginHeading>A Home For Your Books.</LoginHeading>
            <P>Browse our Collections</P>
        </Logintitle>
        <RightContainer>
            <LoginContainer>
                <LoginInfo>Please Login for an Account</LoginInfo>
                <Form>
                    <InputContanier>
                        <TextInput type="text" placeholder="Enter Your Name" />
                    </InputContanier>
                    <InputContanier>
                         <TextInput type="email" placeholder="Enter Your Eamil" />
                    </InputContanier>     
                    <InputContanier>
                        <TextInput type="email" placeholder="Enter Your Password" />
                    </InputContanier>       
                    <LoginButton to='/login'>Log In</LoginButton>     
                    <ButtonContainer>
                        <SubmitButton>Sign Up</SubmitButton>
                        </ButtonContainer>                         
                </Form>
            </LoginContainer>


        </RightContainer>

    </Container>
  )
}

const Container = styled.div`
min-height: 100vh;
display: flex;
padding: 15px;
background-color: #7d3538;
`;

const LeftContainer = styled.div`
width: 30%;
padding: 0px 0px 130px 0px;
background-color: #7d3538;
display: flex;
align-items: center;
`;

const HeaderContainer = styled.div`
width: 90%;

`;
const Logo = styled.img`
display: block;
width: 100%;
`;
const RightContainer = styled.div`
background: #1b4040;
width: 40%;
display: flex;
align-items: flex-end;
justify-content: center;
border-radius: 20px;
padding:70px 70px;
background-color: #7d3538;
`;
const LoginContainer = styled.div`
padding-bottom: 70px;
width: 100%;
`;
const Logintitle = styled.div`

`;
const P = styled.div`
font-size: 25px;
color: #fff;
font-style: italic;
`;
const LoginHeading = styled.h3`
font-size: 32px;
margin-bottom: 20px;
color: #fff;
padding: 100px 0px 0px 0px;
letter-spacing: 3px;
`;
const LoginInfo = styled.p`
font-size: 18px;
margin-bottom: 35px;
color: #fff;
 `;

 const Form = styled.form`
width: 100%;
display: block;
 `;
const InputContanier = styled.div`
margin-bottom: 15px;
position: relative;
&:before {
}
`;
const TextInput = styled.input`
padding: 20px 25px 20px 30px;
width: 100%;
display: block;
border: none;
border-radius: 10px;
font-size: 18px;
outline: none;
`;

const LoginButton = styled(Link)`
display: flex;
justify-content: flex-end;
margin-bottom: 25px;
color: #fff811;
font-size: 20px;
`;
const ButtonContainer =  styled.div`
display: flex;
justify-content: center;
`
const ErrorMessage = styled.p`
font-size: 17px;
color: red;
margin-bottom: 25px;
text-align: center;
`

const SubmitButton = styled.button`
background: #fff811;
border: 0;
outline: 0;
color: #000;
padding: 25px 40px;
border-radius: 8px;
font-size: 20px;
cursor: pointer;
font-weight: 600;
`