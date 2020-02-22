import React from 'react';
import styled from 'styled-components';

const Calendar = () => {
  return (
    <CalendarContainer>
      <h1>eCalendar</h1>
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  margin-top: 50px;
  padding: 50px 400px;
  border: 1px solid #888;

  h1 {
    font-weight: 600;
    font-size: 1.5em;
  }
`;
