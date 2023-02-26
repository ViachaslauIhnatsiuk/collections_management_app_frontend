export const convertDate = (date: string | number): string => {
  const newDate = new Date(date);

  const formatter = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return formatter.format(newDate);
};
