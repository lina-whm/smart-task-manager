import { format, formatDistanceToNow, isToday, isTomorrow, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date: Date | string | undefined): string => {
  if (!date) return 'Без срока';
  
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  
  if (isToday(dateObj)) {
    return `Сегодня, ${format(dateObj, 'HH:mm')}`;
  }
  
  if (isTomorrow(dateObj)) {
    return `Завтра, ${format(dateObj, 'HH:mm')}`;
  }
  
  return format(dateObj, 'd MMMM yyyy, HH:mm', { locale: ru });
};

export const getRelativeDate = (date: Date | string | undefined): string => {
  if (!date) return '';
  
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return formatDistanceToNow(dateObj, { addSuffix: true, locale: ru });
};

export const isOverdue = (date: Date | string | undefined, completed: boolean): boolean => {
  if (!date || completed) return false;
  
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  const now = new Date();
  return dateObj < now;
};