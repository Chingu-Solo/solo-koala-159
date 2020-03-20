export const getMonthFull = date => {
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

export const getAbbreviatedMonthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const getWeekday = date => {
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

export const getFirstDayOfMonth = date => {
  const firstDayOfMonth = new Date(date);
  firstDayOfMonth.setMonth(firstDayOfMonth.getMonth() + 1);
  firstDayOfMonth.setDate(0);
  return firstDayOfMonth;
};

export const getLastDayOfMonth = date => {
  const lastDayOfMonth = new Date(date);
  lastDayOfMonth.setDate(1);
  return lastDayOfMonth;
};

export const getPreviousMonth = date => {
  const prevMonthDate = new Date(date);
  prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
  return prevMonthDate;
};

export const getNextMonth = date => {
  const nextMonthDate = new Date(date);
  nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
  return nextMonthDate;
};

export const getSeason = date => {
  let season;
  switch (date) {
    case 11:
    case 0:
    case 1:
      season = 'winter';
      break;
    case 2:
    case 3:
    case 4:
      season = 'spring';
      break;
    case 5:
    case 6:
    case 7:
      season = 'summer';
      break;
    case 8:
    case 9:
    case 10:
      season = 'fall';
      break;
  }
  return season;
};
