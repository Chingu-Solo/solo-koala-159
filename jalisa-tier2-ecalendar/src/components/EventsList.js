import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import {
  getCurrentDate,
  getCurrentMonthFull,
  getCurrentWeekday
} from '../utilities/calendarUtils';

import EventsPanelImage from '../assets/images/winter.jpeg';
import Modal from './UI/Modal';
import EventForm from './EventForm';

const EventsList = () => {
  const [showEventModal, setShowEventModal] = useState(false);

  const [eventsList, setEventsList] = useState([
    {
      title: '',
      startDate: '',
      endDate: '',
      begins: '',
      ends: '',
      people: '',
      location: '',
      description: ''
    }
  ]);

  const monthDate = `${getCurrentMonthFull()} ${getCurrentDate()}`;

  const addEventClickedHandler = () => {
    setShowEventModal(true);
  };

  const closeEventModalHandler = () => {
    setShowEventModal(false);
  };

  return (
    <Fragment>
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
        <AddEvent>
          <AddEventIcon
            onClick={addEventClickedHandler}
            src={require('../assets/images/plus-sign.png')}
          />
        </AddEvent>
      </EventsPanel>
      <Modal
        showModal={showEventModal}
        onCloseButtonClicked={closeEventModalHandler}
      >
        <EventForm />
      </Modal>
    </Fragment>
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
  margin-top: 15px;
  margin-right: 30px;
  height: 55vh;
  overflow: auto;
  font-size: 1.1em;
  line-height: 1.8;

  ul {
    padding: 0px 20px;
    list-style-type: none;
    li {
      color: white;
    }
  }
`;

const AddEvent = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 30px;
  margin-top: 35px;
`;

const AddEventIcon = styled.img`
  cursor: pointer;
  height: 40px;
  width: 40px;
`;
