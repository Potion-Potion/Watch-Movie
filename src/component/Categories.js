import React from 'react'
import styled from 'styled-components';
import { cats } from '../data.js';
import testStore from './Store.js';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 904px;
    background-color: rgba(0, 0, 0, 0.7);
    font-size: 50px;
    padding: 20px 0px 0px 70px;
    color: white;
    
`

const FrameWrap = styled.div`
    // background-color: red;
    display: flex;
    gap: 30px;

`

const Frame = styled.div`
    width: 170px;
    height: 240px;
    border-radius: 30px;
    // border: 3px solid white;
    // background-color: blue;
    transition: all 0.3s ease-out;
    transform: scale(1);
    box-shadow: 0px 3px 21px 0px #6833FF;
    cursor: pointer;
    &:hover{
        transform: scale(1.2);
        margin: 0px 10px 0px 10px;
    }
    `
    const Image = styled.img`
         width: 100%;
         height: 100%;
         object-fit: cover;
         border-radius: 30px;
         
    `

export const Categories = () => {

    const chooseMovie =  (items) => {
    
    const img = cats.find(item => item === items)

    img = useStore((state)=> state.in)
    console.log(img)
  }

  const itemMovie = cats.slice(0,5).map((item,id) => {
    return ( 
    <Frame key={id} onClick={()=>{chooseMovie(item)}}>
        <Image src={item.img}/>
    </Frame>
)
  })
  

  return (
    <Container>
            <FrameWrap onClick={console.log()}>
                {itemMovie}
            </FrameWrap>
    </Container>
    )
}
