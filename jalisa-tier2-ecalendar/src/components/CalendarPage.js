import React, { useState, Fragment } from 'react';
import Calendar from './Calendar';
import EventsList from './EventsList';

const CalendarPage = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [date, setDate] = useState(new Date(today));
  const [selectedDate, setSelectedDate] = useState(date);

  return (
    <Fragment>
      <Calendar today={today} date={date} setDate={setDate} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      <EventsList date={date} selectedDate={selectedDate} />
    </Fragment>
  );
};

export default CalendarPage;
