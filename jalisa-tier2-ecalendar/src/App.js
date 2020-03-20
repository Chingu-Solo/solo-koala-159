import React, { Fragment } from 'react';
import styled from 'styled-components';
import CalendarPage from './components/CalendarPage';

function App() {
  return (
    <Fragment>
      <AppContainer>
        <CalendarPage />
      </AppContainer>
    </Fragment>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  @media (max-width: 768px) {
    display: block;
    justify-content: center;
  }
`;
