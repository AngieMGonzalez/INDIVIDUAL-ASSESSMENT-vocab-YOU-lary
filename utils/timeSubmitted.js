const currentDate = new Date();

const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

const dateString = `${currentDayOfMonth}-${currentMonth + 1}-${currentYear}`;

export default dateString;
