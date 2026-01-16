export type Priority = 'низкий' | 'средний' | 'высокий' | 'срочный';
export type TaskStatus = 'ожидает' | 'в работе' | 'выполнено' | 'отменено';
export type TaskCategory = 'работа' | 'личное' | 'здоровье' | 'обучение' | 'другое';

export interface Task {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: Priority;
  status: TaskStatus;
  category: TaskCategory;
  dueDate?: Date | string;
  createdAt: Date | string;
  updatedAt: Date | string;
  tags: string[];
  estimatedTime?: number; // в минутах
  timeSpent?: number; // в минутах
  subtasks?: Task[];
}

export interface TaskFilters {
  status: TaskStatus | 'все';
  priority: Priority | 'все';
  category: TaskCategory | 'все';
  search: string;
  showCompleted: boolean;
  showOverdue: boolean;
}

export interface TaskStats {
  total: number;
  completed: number;
  pending: number;
  inProgress: number;
  overdue: number;
  byPriority: Record<Priority, number>;
  byCategory: Record<TaskCategory, number>;
}