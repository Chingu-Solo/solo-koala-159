import React from 'react';
import styled from 'styled-components';
import {
  getAbbreviatedMonthNames,
  getWeekdaysShort,
  getLastDayOfMonth,
  getFirstDayOfMonth,
  getPreviousMonth,
  getNextMonth
} from '../utilities/calendarUtils';

const Calendar = ({ today, date, setDate, selectedDate, setSelectedDate }) => {
  const emptyDaysInMonth = getFirstDayOfMonth(date).getDay();
  const previousMonthDate = getPreviousMonth(date);
  const nextMonthDate = getNextMonth(date);
  const numberOfDaysInMonth = getLastDayOfMonth(date).getDate();
  const numberOfDaysInPreviousMonth = getLastDayOfMonth(
    previousMonthDate
  ).getDate();

  const leftArrowClickedHandler = () => {
    setDate(previousMonthDate);
  };

  const rightArrowClickedHandler = () => {
    setDate(nextMonthDate);
  };

  const selectedDateHandler = newSelectedDate => {
    setSelectedDate(newSelectedDate);
  };

  const calendarCells = [];
  const firstDayInPreviousMonthToDisplay = numberOfDaysInPreviousMonth - emptyDaysInMonth + 1;
  let counter = 0;

  const previousMonthCells = Array.from(Array(emptyDaysInMonth), (_, i) => (
    <DateCell key={'DateCell-' + counter++} className="subdued">
      {firstDayInPreviousMonthToDisplay + i}
    </DateCell>
  ));

  const currentMonthCells = Array.from(Array(numberOfDaysInMonth), (_, i) => {
    const cellDate = new Date(date);
    cellDate.setDate(i + 1);
    return (
      <DateCell
        key={'DateCell-' + counter++}
        onClick={() => selectedDateHandler(cellDate)}
        isDateSelected={selectedDate.toDateString() === cellDate.toDateString()}
        isCurrentDate={cellDate.toDateString() === today.toDateString()}
      >
        {cellDate.getDate()}
      </DateCell>
    );
  });

  calendarCells.push(...previousMonthCells, ...currentMonthCells);

  const emptyDaysForNextMonth = 7 - (calendarCells.length % 7);
  if (emptyDaysForNextMonth < 7) {
    const nextMonthCells = Array.from(Array(emptyDaysForNextMonth), (_, i) => (
      <DateCell key={'DateCell-' + counter++} className="subdued">{i + 1}</DateCell>
    ));

    calendarCells.push(...nextMonthCells);
  }

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
      <DateGrid>{calendarCells}</DateGrid>
    </CalendarContainer>
  );
};

export default Calendar;

const CalendarContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  padding-top: 50px;

  @media (max-width: 767px) {
    padding-top: 0;
    margin-bottom: 20px;
    width: 90%;
  }
`;

const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1 {
    grid-row: 1/2;
    grid-column: 2/4;
    font-weight: 600;
    font-size: 1.5rem;
  }

  h2 {
    grid-row: 1/2;
    grid-column: 5/6;
    font-weight: 400;
    font-size: 1.3rem;
  }

  @media (max-width: 580px) {
    h1 {
      font-size: 1.3rem;
    }
    h2 {
      font-size: 1.1rem;
    }
  }
`;

const Months = styled.div`
  display: flex;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  @media (max-width: 580px) {
    padding: 15px 0;
  }
`;

const LeftArrow = styled.img`
  cursor: pointer;
  height: 35px;
  width: 35px;
  padding-right: 40px;

  @media (max-width: 580px) {
    height: 25px;
    width: 25px;
  }
`;

const RightArrow = styled.img`
  cursor: pointer;
  height: 35px;
  width: 35px;
  padding-left: 40px;

  @media (max-width: 580px) {
    height: 25px;
    width: 25px;
  }
`;

const PreviousMonth = styled.div`
  font-size: 1.3rem;
  color: #888;
  padding-right: 30px;

  @media (max-width: 580px) {
    font-size: 1.1rem;
  }
`;

const CurrentMonth = styled.div`
  font-size: 1.4rem;

  @media (max-width: 580px) {
    font-size: 1.2rem;
  }
`;

const NextMonth = styled.div`
  font-size: 1.3rem;
  color: #888;
  padding-left: 30px;

  @media (max-width: 580px) {
    font-size: 1.1rem;
  }
`;

const DayOfWeek = styled.div`
  display: grid;
  justify-items: center;
  grid-row: 2/3;
  grid-template-columns: repeat(7, 1fr);
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  align-items: center;
  padding: 20px 0;
  color: #800480;
  border-top: 2px solid #ddd;
  border-bottom: 2px solid #ddd;

  @media (max-width: 580px) {
    font-size: 0.9rem;
  }
`;

const DateGrid = styled.div`
  display: grid;
  grid-row: 3/6;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  justify-content: center;
`;

const DateCell = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  justify-self: center;
  font-weight: ${props => (props.isCurrentDate ? '600' : '400')};
  font-size: ${props => (props.isCurrentDate ? '1.4rem' : '1.3rem')};
  border: ${props => (props.isDateSelected ? '1px solid #188665' : 'none')};
  background-color: ${props => (props.isDateSelected ? '#188665' : 'white')};
  color: ${props => (props.isDateSelected ? 'white' : 'black')};
  border-radius: 100%;
  padding: 0;

  &.subdued {
    color: #ddd;
  }

  @media (min-width: 581px) and (max-width: 900px) {
    width: 2.5rem;
    height: 2.5rem;
    font-size: ${props => (props.isCurrentDate ? '1.2rem' : '1.1rem')};
  }

  @media (max-width: 580px) {
    width: 2rem;
    height: 2rem;
    font-size: 0.9rem;
  }

  @media (max-width: 420px) {
    margin: 0.8rem;
  }

  @media (max-width: 380px) {
    width: 1.6rem;
    height: 1.6rem;
    margin: 0.2rem;
  }
`;
