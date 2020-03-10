import React, { useState, Fragment } from 'react';
import styled from 'styled-components';
import {
  getMonthFull,
  getWeekday,
  getSeason
} from '../utilities/calendarUtils';

import WinterImage from '../assets/images/winter.jpeg';
import SpringImage from '../assets/images/spring.jpeg';
import SummerImage from '../assets/images/summer.jpeg';
import FallImage from '../assets/images/fall.jpeg';

import Modal from './UI/Modal';
import EventForm from './EventForm';
import SignInForm from './SignInForm';

const EventsList = ({ date, selectedDate }) => {
  const [showEventModal, setShowEventModal] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);

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

  const monthDate = `${getMonthFull(selectedDate)} ${selectedDate.getDate()}`;
  const season = getSeason(date.getMonth());

  const getSeasonImage = () => {
    if (season === 'winter') {
      return WinterImage;
    } else if (season === 'spring') {
      return SpringImage;
    } else if (season === 'summer') {
      return SummerImage;
    } else if (season === 'fall') {
      return FallImage;
    }
  };

  const addEventClickedHandler = () => {
    setShowEventModal(true);
  };

  const closeEventModalHandler = () => {
    setShowEventModal(false);
  };

  const signInClickedEventHandler = () => {
    setShowSignInModal(true);
  };

  const closeSignInModalHandler = () => {
    setShowSignInModal(false);
  };

  return (
    <Fragment>
      <EventsPanel seasonImage={getSeasonImage()}>
        <SignIn onClick={signInClickedEventHandler}>sign in</SignIn>
        <DayOfWeek>{getWeekday(selectedDate)}</DayOfWeek>
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
      <Modal
        showModal={showSignInModal}
        onCloseButtonClicked={closeSignInModalHandler}
      >
        <SignInForm />
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
  background-image: url(${props => props.seasonImage});
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
  font-size: 1.3em;
  align-self: end;
`;

const MonthDate = styled.div`
  font-weight: 400;
  font-size: 1.3em;
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
