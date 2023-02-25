export const convertDate = (date: string | number): string => {
  const newDate = new Date(date);

  const formatter = new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  return formatter.format(newDate);
};
