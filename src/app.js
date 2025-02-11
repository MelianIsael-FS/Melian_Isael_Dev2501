import React from 'react';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import Form from './components/Form';
import AdCard from './components/AdCard';
import PostCard from './components/PostCard';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 20px;
`;

const RightNav = styled.div`
  width: 250px;
  margin-left: 20px;
`;

function App() {
  return (
    <AppContainer>
      <LeftNav />
      <MainContent>
        <Header />
        <Form />
        <PostCard
          avatar="https://www.w3schools.com/w3images/avatar2.png"
          title="Sample Post Title"
          description="This is a sample post description."
        />
      </MainContent>
      <RightNav>
        <AdCard
          title="Ad 1"
          subtitle="Buy One Get One Free!"
          image="https://via.placeholder.com/150"
        />
        <AdCard
          title="Ad 2"
          subtitle="50% Off Today Only!"
          image="https://via.placeholder.com/150"
        />
      </RightNav>
    </AppContainer>
  );
}

export default App;