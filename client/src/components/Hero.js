import styled from "styled-components";
import { mobile } from "../responsive";
import image from '../images/hero.png'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  ${mobile({ display: "none" })}
`

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  
`

const Slide = styled.div`
  width: 95vw;
  height: 100vh;
  display: flex;
  align-items: center;
  
`
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`

const Image = styled.img`
  height: 80%;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
  font-size: 70px;
`

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const title = 'SUMMER SALE'

const desc = "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS."

function Hero() {
  return (
    <Container>
        <Wrapper>
        <Slide >
            <ImgContainer>
              <Image src={image} />
            </ImgContainer>
            <InfoContainer>
              <Title>{title}</Title>
              <Desc>{desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        </Wrapper>
    </Container>
  )
}

export default Hero