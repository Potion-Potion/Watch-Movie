import React, { useState } from 'react'
import styled from 'styled-components';
import GradeIcon from '@mui/icons-material/Grade';
import { BsFire } from 'react-icons/bs';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled.div`
    display: flex;
    // background-color: red;
    height: 100%;
    margin-bottom: 30px;
    margin-top: 30px;
`
const ContentContainer = styled.div`
    display: flex;
    width: 100%;
`

const MenuContainer = styled.div`
    display: flex;
    color: white;
    flex: 4;
    padding-top: 10px;
    padding-left: 300px;
    gap: 70px;
`
const SearchIconMenu = styled.div`
    display: flex;
    color: white;
    // height: 100%;
    align-items: center;
    flex: 1;
    gap: 10px;
    padding-right: 20px;
    padding-bottom: 30px;

`
const SearchMenu = styled.input`
    padding: 9px;
    outline: none;
    border: none;
`
const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    padding-bottom: 30px;
    color: ${props => props.y === true ?
            'rgba(255, 194, 73, 0.95)' : "white"
          };
    &:hover span{
      padding-bottom: 10px;
      color: rgba(255, 194, 73, 0.95);
      border-bottom: 2px solid rgba(255, 194, 73, 0.95);
    }
    &:hover svg{
      color: rgba(255, 194, 73, 0.95);
      transition: all 0.5s ease;
    }
`

const TextIcon = styled.span`
  padding-bottom: ${props => props.y === true ? "10px" : "30px"};
  border-bottom:  ${props => props.y === true ? '2px solid rgba(255, 194, 73, 0.95)' : 'transparant'};    
  transition: all 0.3s ease;
`


export const Navbar = () => {

  const [t, setT] = useState(false)


  return (
      <Container>
        <ContentContainer>
              <MenuContainer>
                <MenuIcon y={t}>
                  <GradeIcon style={{fontSize: "30px" }}/>
                  <TextIcon y={t}>New</TextIcon>
                </MenuIcon>
                <MenuIcon>
                  <BsFire style={{fontSize: "30px"}}/>
                  <TextIcon>Popular</TextIcon>
                  </MenuIcon>
                <MenuIcon>
                  <CategoryOutlinedIcon style={{fontSize: "30px"}}/>
                  <TextIcon>Categoeries</TextIcon>
                  </MenuIcon>
                <MenuIcon>
                  <EmojiEventsOutlinedIcon style={{fontSize: "30px"}}/>
                  <TextIcon>Top Movie</TextIcon>
                </MenuIcon>
                <MenuIcon>
                  <ShuffleIcon style={{fontSize: "30px"}}/>
                  <TextIcon>Random</TextIcon>
                </MenuIcon>
              </MenuContainer>
              <SearchIconMenu>
                <SearchMenu placeholder='Search.....'/>
                <SearchIcon style={{fontSize: "25px"}}/>
              </SearchIconMenu>
        </ContentContainer>
    </Container>
  )     
}
  