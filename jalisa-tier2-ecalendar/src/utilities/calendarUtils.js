export const getCurrentDate = () => new Date().getDate();

export const getCurrentMonthFull = () => {
  let date = new Date();
  let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  return month[date.getMonth()];
};

export const getMonthAbbreviated = () => {
  let date = new Date();
  let month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let monthsToShow = [];

  let previousMonth = month[date.getMonth() - 1];
  let currentMonth = month[date.getMonth()];
  let nextMonth = month[date.getMonth() + 1];

  monthsToShow.push(previousMonth);
  monthsToShow.push(currentMonth);
  monthsToShow.push(nextMonth);

  return monthsToShow;
};

export const getCurrentWeekday = () => {
  let date = new Date();
  let weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  return weekday[date.getDay()];
};

export const getWeekdaysShort = () => {
  let weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  return weekdays;
};

export const getCurrentYear = () => new Date().getFullYear();

export const getDaysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};

export const getFirstDayOfMonth = (date) => {
  const firstDayOfMonth = new Date(date);
  firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() + 1);
  firstDayOfMonth.setDate(0);
  return firstDayOfMonth;
};

export const getLastDayOfMonth = (date) => {
  const lastDayOfMonth = new Date(date);
  lastDayOfMonth.setDate(1);
  return lastDayOfMonth;
};
