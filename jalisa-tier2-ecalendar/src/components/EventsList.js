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
      id: 1,
      title: 'Goat Yoga',
      startDate: '3/20/2020',
      endDate: '3/20/2020',
      begins: '10:30 AM',
      ends: '11:30 AM',
      people: 'me',
      location: 'gym',
      description: 'Yoga with goats'
    },
    {
      id: 2,
      title: 'Hot Yoga',
      startDate: '3/20/2020',
      endDate: '3/20/2020',
      begins: '11:30 AM',
      ends: '12:30 PM',
      people: 'me',
      location: 'gym',
      description: 'Yoga in a hot room'
    },
    {
      id: 3,
      title: 'Perpetual Yoga',
      startDate: '3/20/2020',
      endDate: '3/20/2020',
      begins: '12:30 PM',
      ends: '1:30 PM',
      people: 'me',
      location: 'gym',
      description: 'Yoga'
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
            {eventsList.map(event => (
              <li key={event.id}>
                {event.begins} - {event.title}
              </li>
            ))}
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
  width: 30%;
  padding-left: 30px;
  padding-top: 50px;
  background-image: url(${props => props.seasonImage});
  background-repeat: no-repeat;
  background-attachment: center;
  background-size: cover;

  @media (max-width: 767px) {
    margin-left: 0;
    width: calc(100% - 30px);
    padding-top: 5px;
    background-position: center;
  }
`;

const SignIn = styled.div`
  text-align: right;
  font-size: 1.4rem;
  margin-top: 15px;
  margin-right: 15px;
  padding-bottom: 40px;
  cursor: pointer;

  @media (max-width: 767px) {
    padding-bottom: 0px;
    font-size: 1.2rem;
  }
`;

const DayOfWeek = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  align-self: end;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

const MonthDate = styled.div`
  font-weight: 400;
  font-size: 1.4rem;

  @media (max-width: 767px) {
    font-size: 1.2rem;
  }
`;

const EventsListContainer = styled.div`
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.65);
  margin-top: 15px;
  margin-right: 30px;
  height: 55vh;
  overflow: auto;
  font-size: 1.2rem;
  line-height: 2;
  font-weight: 600;

  ul {
    padding: 0px 20px;
    list-style-type: none;
    li {
      color: white;
    }
  }

  @media (max-width: 1020px) {
    font-size: 1rem;
  }

  @media (max-width: 767px) {
    width: 95%;
    height: 50%;
  }
`;

const AddEvent = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 30px;
  padding: 35px 0;
`;

const AddEventIcon = styled.img`
  cursor: pointer;
  height: 40px;
  width: 40px;
`;
