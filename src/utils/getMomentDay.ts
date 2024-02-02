import {addHours, endOfDay, isAfter, isBefore, startOfDay} from 'date-fns';

export const getMomentDay = () => {
  const date = new Date();
  const morningStart = startOfDay(date);
  const morningEnd = addHours(startOfDay(date), 12);
  const afternoonStart = addHours(startOfDay(date), 12);
  const afternoonEnd = endOfDay(date);

  if (isAfter(date, morningStart) && isBefore(date, morningEnd)) {
    return 'Bom dia';
  } else if (isAfter(date, afternoonStart) && isBefore(date, afternoonEnd)) {
    return 'Boa tarde';
  } else {
    return 'Boa noite';
  }
};
