import React from 'react';
import styled from 'styled-components';
import {
  getCurrentDate,
  getCurrentMonthFull,
  getCurrentWeekday
} from '../utilities/calendarUtils';

const EventsList = () => {
  const monthDate = `${getCurrentMonthFull()} ${getCurrentDate()}`;

  return (
    <EventsContainer>
      <SignIn>sign in</SignIn>
      <DayOfWeek>{getCurrentWeekday()}</DayOfWeek>
      <MonthDate>
        {monthDate}
      </MonthDate>
    </EventsContainer>
  );
};

export default EventsList;

const EventsContainer = styled.div`
  display: grid;
  width: 25%;
  padding-left: 30px;
  margin-left: 50px;
  grid-template-rows: auto auto auto 50px auto;
  grid-template-columns: auto auto;
  background-color: #eee;
`;

const SignIn = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  text-align: right;
  align-self: center;
  font-size: 1.3em;
  margin-right: 15px;
  cursor: pointer;
`;

const DayOfWeek = styled.div`
  grid-row: 2/3;
  grid-column: 1/2;
  font-weight: 400;
  font-size: 1.2em;
  align-self: end;
`;

const MonthDate = styled.div`
  grid-row: 3/4;
  grid-column: 1/2;
  font-weight: 400;
  font-size: 1.2em;
`;
