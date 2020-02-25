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
