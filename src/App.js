import './App.css';
import { Categories } from './component/Categories';
import { Navbar } from './component/Navbar';
import { Account } from './component/Account';
import styled from 'styled-components';
import { Items } from './data.js';
import { ShowMovie } from './component/ShowMovie';

const Container = styled.div`
  // margin: 0;
  // padding: 0;
  // box-sizing: border-box;
  height: 100%;
  width: 100%;
  display: flex;
`

const ImgContainer = styled.div`
  height: 1500px;
  width: 100%;
  font-size: 200px;
  background-color: black;
  position: absolute;
  color: black;
  top: 0;
  right: 0;
`

const AccountContainer = styled.div`
  height: 1500px;
  width: 400px;
  background-color: rgba(33, 33, 33, 0.95);
  flex: 1;
  z-index: 6;
`

const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 4; 
  z-index: 6;

`
const ImgBg = styled.img`
  object-fit: cover;
  top: 0;
  right: 0;
  height: 1500px;
  width: 100%;
  opacity: 0.3;
`

function App() {
  return (
    <Container>
          <AccountContainer>
            <Account/>
          </AccountContainer>
          <ContentContainer>
            <Navbar/>
            <ShowMovie/>
            <Categories/>
          </ContentContainer>
          <ImgContainer>
            <ImgBg src={Items[0].image}/>
          </ImgContainer>  
    </Container>
  );
}

export default App;
