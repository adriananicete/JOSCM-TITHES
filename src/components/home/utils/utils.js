// RandomVerseGenerator
export const verses = [
  "Giving is the heart’s way of multiplying joy.",
  "A gift given with love is never wasted.",
  "When you give, you plant seeds of hope.",
  "Generosity turns little into plenty.",
  "The act of giving makes the soul richer.",
  "Give freely, for every hand that helps is blessed.",
  "True wealth is measured by what you give.",
  "To give is to leave a mark of kindness.",
  "Sharing is the bridge between hearts.",
  "Giving opens doors that receiving cannot.",
];

export const randomVerseGenerator = () => {
  return verses[Math.floor(Math.random() * verses.length)];
};

// Get full formatted date
export const getFullDate = () => {
  const date = new Date().getDate();
const year = new Date().getFullYear();
const day = new Date().getDay();
const months = new Date().getMonth();
const arrDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const arrMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Augest",
  "September",
  "October",
  "November",
  "December",
];

 const dayName = arrDay[day];
 const monthName = arrMonths[months];

 return { dayName, monthName, year, date };
}
