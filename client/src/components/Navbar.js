import React from 'react'
import styled from "styled-components"
import { mobile } from "../responsive";
import {AiOutlineShoppingCart,AiOutlineSearch} from 'react-icons/ai'
import logo from '../images/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { logout } from '../redux/userRedux';
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
  padding: 8px;
  width: 300px;
  font-size: 20px;
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
  const dispatch= useDispatch()
  const quantity = useSelector(state=>state.cart.quantity)
  const currentUser = useSelector(state=>state.user.currentUser)
  console.log(currentUser);
  const handleLogout=()=> {
    dispatch(logout())
  }
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
                {!currentUser ?(<>
                  <Link to="/register">
                  <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link to="/login">
                  <MenuItem>SIGN IN</MenuItem>
                </Link>
                </>): <Link to="/">
                  <MenuItem onClick={handleLogout}>LOG OUT</MenuItem>
                </Link> }
                <Link to="/cart">
                <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                <AiOutlineShoppingCart />
                </Badge>
                </MenuItem>
                </Link>
             </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar