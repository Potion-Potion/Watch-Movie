import React from 'react'
import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial';
import RecommendIcon from '@mui/icons-material/Recommend';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Items } from '../data.js';

const AccountContainer = styled.div`
    font-size: 50px;
    color: white;
    display: flex;
    align-items: center;
    gap: 40px;
    flex-direction: column;
`
const FrameImg = styled.div`
    
    padding-top: 50px;
    display: flex;
    justify-content: center;
`
const Img = styled.img`
    object-fit: cover;
    width: 130px;
    height: 130px;
    border-radius: 50%;
    box-shadow: 5px 5px 10px 1px #676767;
`
const AccountContent = styled.div`
    display: flex;
    width: 100%;
    gap: 30px;
    // align-items: center;
    // background-color: red;
    flex-direction: column;
`
const MyStuff = styled.div`
    padding-left: 30px;
    color: rgba(255, 194, 73, 0.95);
    font-weight: bold;
`
const DetailsWrap = styled.div`
    display: flex;
    align-items: center;
    padding-left: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
        &:hover {
        background-color: white;
        color: black;
    } &:hover svg{
        color: black;
    }
`
const IconDetails = styled.span`
    color: rgba(255, 194, 73, 0.95);
`

const Details = styled.span`
    font-size: 25px;
    padding-left: 40px;
`

export const Account = () => {

  return (
    <AccountContainer>
        <FrameImg>
            <Img src={Items[2].image}/>
        </FrameImg>
        <AccountContent>
            <MyStuff>My Stuff</MyStuff>
            <DetailsWrap>
                <IconDetails><FavoriteBorderIcon style={{fontSize: "40px"}}/></IconDetails>
                <Details>Favorites</Details>
            </DetailsWrap>
            <DetailsWrap>
                <IconDetails><FolderSpecialIcon style={{fontSize: "40px"}}/></IconDetails>
                <Details>To Watch List</Details>
            </DetailsWrap>
            <DetailsWrap>
                <IconDetails><RecommendIcon style={{fontSize: "40px"}}/></IconDetails>   
                <Details>Recommended</Details>
            </DetailsWrap>
            <DetailsWrap>
                <IconDetails><AccountCircleIcon style={{fontSize: "40px"}}/></IconDetails>
                <Details>Account</Details>
            </DetailsWrap>
        </AccountContent>
    </AccountContainer>
    )
}
