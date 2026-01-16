import { format, formatDistanceToNow, isToday, isTomorrow, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';

export const formatDate = (date: Date | string | undefined): string => {
  if (!date) return 'Без срока';
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    
    if (isToday(dateObj)) {
      return `Сегодня, ${format(dateObj, 'HH:mm')}`;
    }
    
    if (isTomorrow(dateObj)) {
      return `Завтра, ${format(dateObj, 'HH:mm')}`;
    }
    
    return format(dateObj, 'd MMMM yyyy', { locale: ru });
  } catch (error) {
    console.error('Ошибка форматирования даты:', error);
    return 'Неверная дата';
  }
};

export const getRelativeDate = (date: Date | string | undefined): string => {
  if (!date) return '';
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return formatDistanceToNow(dateObj, { addSuffix: true, locale: ru });
  } catch (error) {
    console.error('Ошибка форматирования относительной даты:', error);
    return '';
  }
};

export const isOverdue = (date: Date | string | undefined, completed: boolean): boolean => {
  if (!date || completed) return false;
  
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    const now = new Date();
    return dateObj < now;
  } catch (error) {
    console.error('Ошибка проверки просрочки:', error);
    return false;
  }
};