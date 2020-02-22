import React, { Fragment } from 'react';
import styled from 'styled-components';
import Calendar from './components/Calendar';
import EventsList from './components/EventsList';

function App() {
  return (
    <Fragment>
      <AppContainer>
        <Calendar />
        <EventsList />
      </AppContainer>
    </Fragment>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
`;
