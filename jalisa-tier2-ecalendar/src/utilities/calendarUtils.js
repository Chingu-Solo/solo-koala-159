export const getCurrentDate = () => new Date().getDate();

export const getCurrentMonthFull = () => {
  let date = new Date();
  let month = [];

  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';

  return month[date.getMonth()];
};

export const getMonthAbbreviated = () => {
  let date = new Date();
  let month = [];

  month[0] = 'Jan';
  month[1] = 'Feb';
  month[2] = 'Mar';
  month[3] = 'Apr';
  month[4] = 'May';
  month[5] = 'Jun';
  month[6] = 'Jul';
  month[7] = 'Aug';
  month[8] = 'Sep';
  month[9] = 'Oct';
  month[10] = 'Nov';
  month[11] = 'Dec';

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
  let weekday = [7];

  weekday[0] = 'Sunday';
  weekday[1] = 'Monday';
  weekday[2] = 'Tuesday';
  weekday[3] = 'Wednesday';
  weekday[4] = 'Thursday';
  weekday[5] = 'Friday';
  weekday[6] = 'Saturday';

  return weekday[date.getDay()];
};

export const getCurrentYear = () => new Date().getFullYear();
