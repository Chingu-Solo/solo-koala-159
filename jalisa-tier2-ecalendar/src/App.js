import React, { Fragment } from 'react';
import styled from 'styled-components';
import Calendar from './components/Calendar';
import EventsList from './components/EventsList';
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
`;
