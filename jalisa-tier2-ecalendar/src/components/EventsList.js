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
      <MonthDate>{monthDate}</MonthDate>
    </EventsContainer>
  );
};

export default EventsList;

const EventsContainer = styled.div`
  display: block;
  width: 25%;
  height: calc(95vh - 50px);
  padding-left: 30px;
  margin-left: 50px;
  background-color: #eee;
`;

const SignIn = styled.div`
  text-align: right;
  font-size: 1.3em;
  margin-top: 15px;
  margin-right: 15px;
  padding-bottom: 40px;
  cursor: pointer;
`;

const DayOfWeek = styled.div`
  font-weight: 400;
  font-size: 1.2em;
  align-self: end;
`;

const MonthDate = styled.div`
  font-weight: 400;
  font-size: 1.2em;
`;
