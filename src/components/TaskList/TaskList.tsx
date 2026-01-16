import React from 'react';
import { Task } from '../../types/task.types';
import TaskItem from '../TaskItem/TaskItem';
import EmptyState from '../EmptyState/EmptyState';
import { generateSmartSuggestions } from '../../utils/taskHelpers';
import * as S from './TaskList.styles';

interface TaskListProps {
  tasks: Task[];
  loading?: boolean;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
  title?: string;
  showEmptyState?: boolean;
  emptyStateType?: 'all' | 'filtered';
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  loading = false,
  onToggleComplete,
  onDelete,
  onEdit,
  title = 'Задачи',
  showEmptyState = true,
  emptyStateType = 'all'
}) => {
  const suggestions = generateSmartSuggestions(tasks);
  
  if (loading) {
    return (
      <S.LoadingContainer>
        Загрузка задач...
      </S.LoadingContainer>
    );
  }
  
  if (tasks.length === 0 && showEmptyState) {
    return (
      <EmptyState 
        type={emptyStateType} 
        suggestions={emptyStateType === 'all' ? suggestions : []} 
      />
    );
  }
  
  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = tasks.length - completedCount;
  
  return (
    <S.TaskListContainer>
      <S.TaskListHeader>
        <S.TaskListTitle>{title}</S.TaskListTitle>
        <S.TaskCount>
          {tasks.length} задач{tasks.length !== 1 ? '' : 'а'} 
          {completedCount > 0 && ` (${completedCount} выполнено)`}
        </S.TaskCount>
      </S.TaskListHeader>
      
      <S.TaskItemsContainer>
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </S.TaskItemsContainer>
      
      {tasks.length > 0 && (
        <S.TaskSummary>
          {pendingCount > 0 ? (
            <span>Осталось {pendingCount} задач{pendingCount !== 1 ? '' : 'а'}</span>
          ) : (
            <span>Все задачи выполнены! 🎉</span>
          )}
        </S.TaskSummary>
      )}
    </S.TaskListContainer>
  );
};

export default TaskList;