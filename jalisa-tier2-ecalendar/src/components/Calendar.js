import React, { useState } from 'react';
import styled from 'styled-components';
import {
  getAbbreviatedMonthNames,
  getWeekdaysShort,
  getFirstDayOfMonth,
  getLastDayOfMonth
} from '../utilities/calendarUtils';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const numberOfDaysInMonth = getFirstDayOfMonth(date).getDate();
  const emptyDaysInMonth = getLastDayOfMonth(date).getDay();

  const leftArrowClickedHandler = () => {
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    setDate(date);
  };

  const rightArrowClickedHandler = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1);
    setDate(date);
  };

  return (
    <CalendarContainer>
      <CalendarHeader>
        <h1>eCalendar</h1>
        <h2>{date.getFullYear()}</h2>
      </CalendarHeader>
      <Months>
        <LeftArrow
          onClick={leftArrowClickedHandler}
          src={require('../assets/images/arrow-left.png')}
        />
        <PreviousMonth>
          {getAbbreviatedMonthNames[date.getMonth() - 1]}
        </PreviousMonth>
        <CurrentMonth>{getAbbreviatedMonthNames[date.getMonth()]}</CurrentMonth>
        <NextMonth>{getAbbreviatedMonthNames[date.getMonth() + 1]}</NextMonth>
        <RightArrow
          onClick={rightArrowClickedHandler}
          src={require('../assets/images/arrow-right.png')}
        />
      </Months>
      <DayOfWeek>
        {getWeekdaysShort().map(day => {
          return <div key={day}>{day}</div>;
        })}
      </DayOfWeek>
      <DateGrid>
        {Array.from(Array(emptyDaysInMonth), () => (
          <div></div>
        ))}
        {Array.from(Array(numberOfDaysInMonth), (_, i) => (
          <button>{i + 1}</button>
        ))}
      </DateGrid>
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  width: 50%;
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    grid-row: 1/2;
    grid-column: 2/4;
    font-weight: 600;
    font-size: 1.5em;
  }

  h2 {
    grid-row: 1/2;
    grid-column: 5/6;
    font-weight: 400;
    font-size: 1.3em;
  }
`;

const Months = styled.div`
  display: flex;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  padding: 30px 15px;
  border-bottom: 2px solid #000;
`;

const LeftArrow = styled.img`
  cursor: pointer;
  height: 35px;
  width: 35px;
  padding-right: 40px;
`;

const RightArrow = styled.img`
  cursor: pointer;
  height: 35px;
  width: 35px;
  padding-left: 40px;
`;

const PreviousMonth = styled.div`
  font-size: 1.3em;
  color: #888;
  padding-right: 30px;
`;

const CurrentMonth = styled.div`
  font-size: 1.4em;
`;

const NextMonth = styled.div`
  font-size: 1.3em;
  color: #888;
  padding-left: 30px;
`;

const DayOfWeek = styled.div`
  display: grid;
  justify-items: center;
  grid-row: 2/3;
  grid-template-columns: repeat(7, 1fr);
  padding-top: 20px;
  text-transform: uppercase;
  font-size: 1.1em;
`;

const DateGrid = styled.div`
  display: grid;
  grid-row: 3/6;
  grid-template-columns: repeat(7, 1fr);

  button {
    outline: none;
    border: none;
    cursor: pointer;
    height: 80px;
    font-size: 1.2em;
    font-weight: ${props => (props.currentDate ? '600' : '400')};
  }
`;
