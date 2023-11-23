export const formattingDateToString = (date) => {
  const formatter = new Intl.DateTimeFormat('ru', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
  return formatter.format(date);
};