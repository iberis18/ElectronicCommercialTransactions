export const formattingDateToString = (date) => {
  const formatter = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
  return formatter.format(date);
};

export const spaceDigits = (number) => {
  return number?.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};

export const formattingNumerToTwoDigits = (number) => {
  let formattedNumber = number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });
  return formattedNumber;
}