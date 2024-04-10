export const getAge = (birthDate: string): number => {
  const date = birthDate.split('-');
  const day = parseInt(date[0]);
  const mounth = parseInt(date[1]) - 1;
  const year = parseInt(date[2]);

  const birthDateFormat = new Date(year, mounth, day);
  const today = new Date();

  const difference = today.getTime() - birthDateFormat.getTime();

  return Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25)) ?? 0;
};
