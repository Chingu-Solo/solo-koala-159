import React from 'react';
import styled from 'styled-components';
import CalendarPage from './components/CalendarPage';

function App() {
  return (
    <AppContainer>
      <CalendarPage />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 767px) {
    display: block;
    justify-content: center;
  }
`;
