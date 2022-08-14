import React from 'react'
import styled from "styled-components"
import { mobile } from "../responsive";
import {AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai'
import logo from '../images/logo.png'

const Container = styled.div`
    height :60px;
    ${mobile({ height: "50px" })}


`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}

`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`; 

const Left = styled.div`
flex: 1;
display:flex;
align-items: flex-start;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  width: 350px;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 10px;
`;


const Input = styled.input`
  border: none;
  padding: 10px;
  width: 300px;
  font-size: 24px;
  ${mobile({ width: "50px" })}
`;

const MenuItem = styled.div`
  font-size: 25px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <img src={logo} style={{height : '50px', marginRight: '15px'}} alt="" />
                <Logo>InAction</Logo>
            </Left>
            <Center>
                <SearchContainer>
                    <Input placeholder="Search" />
                    <AiOutlineSearch size={35}/>
                </SearchContainer>
            </Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                        <AiOutlineShoppingCart />
                </MenuItem>
             </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar