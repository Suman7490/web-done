import React, {useState} from 'react';
import styled from 'styled-components';
import Video from '../../Pages/video.mp4'
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll';


const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer>
        <Herobg>
            <Videobg autoPlay loop muted src={Video} type='video/mp4' />
        </Herobg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>Free stock photos & videos you can use everywhere. Browse millions of high-quality royalty free stock images & copyright free pictures.
          </HeroP>
          <HeroBtnWrapper><Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>Get Started{hover ? <ArrowForward /> : <ArrowRight />}</Button></HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;
:before{
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0.2)0%,rgba(0,0,0,0.6)100%), linear-gradient(180deg rgba(0,0,0,0.2)0%, transparent 100%);
       z-index: 2;
}
`;  
const Herobg = styled.div`
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`;
const Videobg = styled.video`
width: 100%;
height: 100%;
-o-object-fit:cover;
object-fit: cover;
background: #232a34;
`;
const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;
const HeroH1 = styled.h1`
color: #fff;
font-size: 48px;
text-align: center;
@media screen and (max-width:768px){
    font-size: 32px;
}
`;
const HeroP = styled.p`
margin-top: 24px;
color: #fff;
font-size: 24px;
text-align: center;
max-width: 600px;
@media screen and (max-width:768px){
font-size: 24px;
}
@media screen and (max-width:768px){
font-size: 18px;
}
`;
const HeroBtnWrapper = styled.div`
margin-top: 32px;
display: flex;
flex-direction: column;
align-items: center;
`;
const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`;
const ArrowRight= styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`;
const Button = styled(Link)`
border-radius: 50px;
background: ${({primary}) => (primary ? '#010606' : '#01BF71')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
color: ${({dark}) => (dark ? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: 0.2s ease-in-out;
&:hover{
    transition: all .2s ease-in-out;
    background: ${({primary}) => (primary ? '#01BF71' : '#fff')};
}
`;
export default HeroSection