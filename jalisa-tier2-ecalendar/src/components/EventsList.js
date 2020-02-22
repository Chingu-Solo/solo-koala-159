import React from 'react';
import styled from 'styled-components';

const EventsList = () => {
  return (
    <EventsContainer>
      <h2>Saturday</h2>
      <h2>February 22</h2>
    </EventsContainer>
  );
};

export default EventsList;

const EventsContainer = styled.div`
  margin-top: 50px;
  padding: 50px 100px;
  border: 1px solid #888;
  h2 {
    font-weight: 400;
    font-size: 1.2em;
  }
`;
