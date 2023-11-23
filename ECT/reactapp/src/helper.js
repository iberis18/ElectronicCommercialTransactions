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