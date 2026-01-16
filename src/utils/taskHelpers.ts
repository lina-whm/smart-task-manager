import { Task, TaskFilters, TaskStats, Priority, TaskCategory, TaskStatus } from '../types/task.types';
import { format, isBefore, parseISO } from 'date-fns';

export const priorities: Priority[] = ['низкий', 'средний', 'высокий', 'срочный'];
export const categories: TaskCategory[] = ['работа', 'личное', 'здоровье', 'обучение', 'другое'];
export const statuses: TaskStatus[] = ['ожидает', 'в работе', 'выполнено', 'отменено'];

export const getPriorityColor = (priority: Priority): string => {
  const colors: Record<Priority, string> = {
    'низкий': '#4CAF50',
    'средний': '#FF9800',
    'высокий': '#F44336',
    'срочный': '#9C27B0'
  };
  return colors[priority];
};

export const getStatusColor = (status: TaskStatus): string => {
  const colors: Record<TaskStatus, string> = {
    'ожидает': '#FF9800',
    'в работе': '#2196F3',
    'выполнено': '#4CAF50',
    'отменено': '#9E9E9E'
  };
  return colors[status];
};

export const getCategoryIcon = (category: TaskCategory): string => {
  const icons: Record<TaskCategory, string> = {
    'работа': '💼',
    'личное': '🏠',
    'здоровье': '🏥',
    'обучение': '📚',
    'другое': '📦'
  };
  return icons[category];
};

export const filterTasks = (tasks: Task[], filters: TaskFilters): Task[] => {
  return tasks.filter(task => {
    // Фильтр по выполнению
    if (!filters.showCompleted && task.completed) return false;
    
    // Фильтр по статусу
    if (filters.status !== 'все' && task.status !== filters.status) return false;
    
    // Фильтр по приоритету
    if (filters.priority !== 'все' && task.priority !== filters.priority) return false;
    
    // Фильтр по категории
    if (filters.category !== 'все' && task.category !== filters.category) return false;
    
    // Фильтр по поиску
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesTitle = task.title.toLowerCase().includes(searchLower);
      const matchesDescription = task.description?.toLowerCase().includes(searchLower) || false;
      const matchesTags = task.tags.some(tag => tag.toLowerCase().includes(searchLower));
      if (!matchesTitle && !matchesDescription && !matchesTags) return false;
    }
    
    // Фильтр по просроченным
    if (filters.showOverdue && task.dueDate) {
      const dueDate = typeof task.dueDate === 'string' ? parseISO(task.dueDate) : task.dueDate;
      const isOverdue = isBefore(dueDate, new Date()) && !task.completed;
      if (!isOverdue) return false;
    }
    
    return true;
  });
};

export const calculateStats = (tasks: Task[]): TaskStats => {
  const now = new Date();
  const stats: TaskStats = {
    total: tasks.length,
    completed: tasks.filter(t => t.completed).length,
    pending: tasks.filter(t => t.status === 'ожидает').length,
    inProgress: tasks.filter(t => t.status === 'в работе').length,
    overdue: tasks.filter(t => {
      if (!t.dueDate || t.completed) return false;
      const dueDate = typeof t.dueDate === 'string' ? parseISO(t.dueDate) : t.dueDate;
      return isBefore(dueDate, now);
    }).length,
    byPriority: {
      'низкий': tasks.filter(t => t.priority === 'низкий').length,
      'средний': tasks.filter(t => t.priority === 'средний').length,
      'высокий': tasks.filter(t => t.priority === 'высокий').length,
      'срочный': tasks.filter(t => t.priority === 'срочный').length
    },
    byCategory: {
      'работа': tasks.filter(t => t.category === 'работа').length,
      'личное': tasks.filter(t => t.category === 'личное').length,
      'здоровье': tasks.filter(t => t.category === 'здоровье').length,
      'обучение': tasks.filter(t => t.category === 'обучение').length,
      'другое': tasks.filter(t => t.category === 'другое').length
    }
  };
  
  return stats;
};

export const sortTasks = (tasks: Task[], sortBy: string): Task[] => {
  const sorted = [...tasks];
  
  switch (sortBy) {
    case 'priority': {
      const priorityOrder = { 'срочный': 0, 'высокий': 1, 'средний': 2, 'низкий': 3 };
      sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
      break;
    }
    case 'dueDate':
      sorted.sort((a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        const dateA = typeof a.dueDate === 'string' ? parseISO(a.dueDate) : a.dueDate;
        const dateB = typeof b.dueDate === 'string' ? parseISO(b.dueDate) : b.dueDate;
        return dateA.getTime() - dateB.getTime();
      });
      break;
    case 'createdAt':
      sorted.sort((a, b) => {
        const dateA = typeof a.createdAt === 'string' ? parseISO(a.createdAt) : a.createdAt;
        const dateB = typeof b.createdAt === 'string' ? parseISO(b.createdAt) : b.createdAt;
        return dateB.getTime() - dateA.getTime();
      });
      break;
    default: { // Сортировка по умолчанию: выполнение и приоритет
      const priorityOrder = { 'срочный': 0, 'высокий': 1, 'средний': 2, 'низкий': 3 };
      sorted.sort((a, b) => {
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      });
      break;
    }
  }
  
  return sorted;
};

export const generateSmartSuggestions = (tasks: Task[]): string[] => {
  const suggestions: string[] = [];
  const now = new Date();
  
  // Проверка просроченных задач
  const overdueTasks = tasks.filter(t => {
    if (!t.dueDate || t.completed) return false;
    const dueDate = typeof t.dueDate === 'string' ? parseISO(t.dueDate) : t.dueDate;
    return isBefore(dueDate, now);
  });
  
  if (overdueTasks.length > 0) {
    suggestions.push(`У вас ${overdueTasks.length} просроченн${overdueTasks.length > 1 ? 'ых' : 'ая'} задач${overdueTasks.length > 1 ? 'и' : 'а'}. Рекомендуем их проверить.`);
  }
  
  // Проверка задач с высоким приоритетом
  const highPriorityTasks = tasks.filter(t => 
    (t.priority === 'срочный' || t.priority === 'высокий') && !t.completed
  );
  
  if (highPriorityTasks.length > 0) {
    suggestions.push(`Сфокусируйтесь на ${highPriorityTasks.length} высокоприоритетн${highPriorityTasks.length > 1 ? 'ых' : 'ой'} задач${highPriorityTasks.length > 1 ? 'ах' : 'е'}.`);
  }
  
  // Проверка задач на сегодня
  const today = format(now, 'yyyy-MM-dd');
  const tasksDueToday = tasks.filter(t => {
    if (!t.dueDate || t.completed) return false;
    const dueDate = typeof t.dueDate === 'string' ? parseISO(t.dueDate) : t.dueDate;
    return format(dueDate, 'yyyy-MM-dd') === today;
  });
  
  if (tasksDueToday.length > 0) {
    suggestions.push(`На сегодня запланировано ${tasksDueToday.length} задач${tasksDueToday.length > 1 ? 'и' : 'а'}.`);
  }
  
  // Статистика выполнения
  const completionRate = tasks.length > 0 
    ? Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100) 
    : 0;
  
  if (completionRate < 30) {
    suggestions.push('Уровень выполнения низкий. Попробуйте разбивать задачи на более мелкие шаги.');
  } else if (completionRate > 80) {
    suggestions.push('Отличная работа! Вы поддерживаете высокий уровень выполнения задач.');
  }
  
  return suggestions;
};