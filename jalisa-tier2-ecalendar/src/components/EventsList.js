import React, { useState } from 'react';
import styled from 'styled-components';
import {
  getCurrentDate,
  getCurrentMonthFull,
  getCurrentWeekday
} from '../utilities/calendarUtils';

import EventsPanelImage from '../assets/images/winter.jpeg';

const EventsList = () => {
  const [eventsList, setEventsList] = useState({
    title: '',
    startDate: '',
    endDate: '',
    begins: '',
    ends: '',
    people: '',
    location: '',
    description: ''
  });

  const monthDate = `${getCurrentMonthFull()} ${getCurrentDate()}`;

  return (
    <EventsPanel>
      <SignIn>sign in</SignIn>
      <DayOfWeek>{getCurrentWeekday()}</DayOfWeek>
      <MonthDate>{monthDate}</MonthDate>
      <EventsListContainer>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </EventsListContainer>
    </EventsPanel>
  );
};

export default EventsList;

const EventsPanel = styled.div`
  display: block;
  width: 25%;
  height: calc(95vh - 50px);
  padding-left: 30px;
  margin-left: 50px;
  background-image: url(${EventsPanelImage});
  background-repeat: no-repeat;
  background-attachment: center;
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

const EventsListContainer = styled.div`
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  margin-right: 30px;
  ul {
    padding: 20px;
    list-style-type: none;
    li {
      color: white;
    }
  }
`;
