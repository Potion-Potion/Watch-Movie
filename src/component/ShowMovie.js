import React from 'react'
import styled from 'styled-components';
import Rating from '@mui/material/Rating';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { cats } from '../data.js';

const Container = styled.div`
    color: white;
    font-size: 50px;
    // margin-bottom: 270px;
    height: 450px;
    width: 100%;        
    `
const Wrapper = styled.div`
    margin: 50px;
    display: flex;
    height: 80%;
    gap: 40px;
`

const MovieFrame = styled.div`
    flex 1;
    height: 100%;
    // border: 3px solid white;
`
const MovieImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`


const ContentContainer = styled.div`
    flex 2;
    display: flex;
    flex-direction: column;
    // width: 500px;
    height: 100%;
    // background-color: red;
    // justify-content: space-around;
    // align-items: center;
    gap: 15px;
    padding: 10px;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.05);    
`
const ContentWrap = styled.div`
    display: flex;
    // background-color: red;
    width: 100%;
    height: 100%;
    gap: 30px;
    // justify-content: space-between;
    align-items: center;
    
`
const Topic = styled.div`
    font-size: 37px;
`

const Details = styled.div`
    font-size: 20px;
`

const BtnPlay = styled.div`
    display: flex; 
    background: linear-gradient(316deg, #4500FF 0%, #CFA6EA 100%);
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-left: 20px;
    width: 160px;
    height: 70%;
    margin-bottom: 20px;
    box-shadow: 2px 1px 14px 10px rgba(77, 82, 255, 0.3);
    transform: scale(1);
    transition: all 0.1s ease;
    &:hover{
        transform: scale(1.2);
    }
`

export const ShowMovie = () => {
   
   const [value, setValue] = React.useState(3);

   
  return (
    <Container>
    <Wrapper>
        <MovieFrame>
            <MovieImg src={cats[5].img}/>
        </MovieFrame>
        <ContentContainer>
            <ContentWrap>
                <Topic>Movie of the Years 2044</Topic>
                <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
                />
            </ContentWrap>
                <Details>
                Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it.
                </Details>
                <BtnPlay>
                    <PlayCircleOutlineIcon style={{fontSize: "50px"}}/>
                </BtnPlay>
        </ContentContainer>
    </Wrapper>
    </Container>
  )
}
