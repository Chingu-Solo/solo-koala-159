import React from 'react';
import styled from 'styled-components';
import { getCurrentYear } from '../utilities/calendarUtils';

const Calendar = () => {
  return (
    <CalendarContainer>
      <CalendarHeader>
        <h1>eCalendar</h1>
        <h2>{getCurrentYear()}</h2>
      </CalendarHeader>
      <DayOfWeek>
        <div>SUN</div>
        <div>MON</div>
        <div>TUE</div>
        <div>WED</div>
        <div>THU</div>
        <div>FRI</div>
        <div>SAT</div>
      </DayOfWeek>
      <DateGrid>
        <button>
          <time datetime="2019-02-01">1</time>
        </button>
        <button>
          <time datetime="2019-02-02">2</time>
        </button>
        <button>
          <time datetime="2019-02-03">3</time>
        </button>
        <button>
          <time datetime="2019-02-4">4</time>
        </button>
        <button>
          <time datetime="2019-02-5">5</time>
        </button>
        <button>
          <time datetime="2019-02-6">6</time>
        </button>
        <button>
          <time datetime="2019-02-7">7</time>
        </button>
        <button>
          <time datetime="2019-02-8">8</time>
        </button>
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
    font-size: 1.2em;
  }
`;

const DayOfWeek = styled.div`
  display: grid;
  justify-items: center;
  grid-row: 2/3;
  grid-template-columns: repeat(7, 1fr);
`;

const DateGrid = styled.div`
  display: grid;
  grid-row: 3/6;
  grid-template-columns: repeat(7, 1fr);

  button {
    outline: none;
    border: none;
    cursor: pointer;
    height: 50px;
    font-weight: 400;
    font-size: 1.2em;
  }
`;
