import React from 'react';
import styled from 'styled-components';
import {
  getAbbreviatedMonthNames,
  getWeekdaysShort,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  getPreviousMonth,
  getNextMonth
} from '../utilities/calendarUtils';

const Calendar = ({ today, date, setDate, selectedDate, setSelectedDate }) => {
  const numberOfDaysInMonth = getFirstDayOfMonth(date).getDate();
  const emptyDaysInMonth = getLastDayOfMonth(date).getDay();

  const previousMonthDate = getPreviousMonth(date);
  const nextMonthDate = getNextMonth(date);

  const leftArrowClickedHandler = () => {
    setDate(previousMonthDate);
  };

  const rightArrowClickedHandler = () => {
    setDate(nextMonthDate);
  };

  const selectedDateHandler = newSelectedDate => {
    setSelectedDate(newSelectedDate);
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
          {getAbbreviatedMonthNames[previousMonthDate.getMonth()]}
        </PreviousMonth>
        <CurrentMonth>{getAbbreviatedMonthNames[date.getMonth()]}</CurrentMonth>
        <NextMonth>
          {getAbbreviatedMonthNames[nextMonthDate.getMonth()]}
        </NextMonth>
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
        {Array.from(Array(numberOfDaysInMonth), (_, i) => {
          const cellDate = new Date(date);
          cellDate.setDate(i + 1);
          return (
            <DateCell
              onClick={() => selectedDateHandler(cellDate)}
              isDateSelected={
                selectedDate.toDateString() === cellDate.toDateString()
              }
              isCurrentDate={cellDate.toDateString() === today.toDateString()}
            >
              {cellDate.getDate()}
            </DateCell>
          );
        })}
      </DateGrid>
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  width: 60%;
  margin-left: auto;
  padding-top: 50px;
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
  text-transform: uppercase;
  font-weight: 600;
  align-items: center;
  padding: 20px 0;
  color: #800480;
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;
`;

const DateGrid = styled.div`
  display: grid;
  grid-row: 3/6;
  grid-template-columns: repeat(7, 1fr);
`;

const DateCell = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 3vw;
  height: 3vw;
  margin: 1vw;
  justify-self: center;
  font-weight: ${props => (props.isCurrentDate ? '600' : '400')};
  font-size: ${props => (props.isCurrentDate ? '1.5vw' : '1.3vw')};
  border: ${props => (props.isDateSelected ? '1px solid #188665' : 'none')};
  background-color: ${props => (props.isDateSelected ? '#188665' : 'white')};
  color: ${props => (props.isDateSelected ? 'white' : 'black')};
  border-radius: 100%;
`;
