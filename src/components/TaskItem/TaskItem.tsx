import React, { useState } from 'react';
import { 
  FaCheck, 
  FaEdit, 
  FaTrash, 
  FaClock, 
  FaCalendarAlt,
  FaTag
} from 'react-icons/fa';
import { Task } from '../../types/task.types';
import { 
  getPriorityColor, 
  getStatusColor, 
  getCategoryIcon 
} from '../../utils/taskHelpers';
import { formatDate, getRelativeDate, isOverdue } from '../../utils/dateHelpers';
import * as S from './TaskItem.styles';

interface TaskItemProps {
  task: Task;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ 
  task, 
  onToggleComplete, 
  onDelete, 
  onEdit 
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  
  const priorityColor = getPriorityColor(task.priority);
  const statusColor = getStatusColor(task.status);
  const categoryIcon = getCategoryIcon(task.category);
  const isTaskOverdue = isOverdue(task.dueDate, task.completed);
  
  const toggleDescription = () => {
    if (task.description && task.description.length > 100) {
      setShowFullDescription(!showFullDescription);
    }
  };
  
  const handleCompleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleComplete(task.id);
  };
  
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Клик редактирования задачи:', task.title);
    onEdit(task);
  };
  
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      onDelete(task.id);
    }
  };
  
  return (
    <S.TaskItemContainer 
      completed={task.completed} 
      priority={priorityColor}
      onClick={toggleDescription}
    >
      <S.TaskHeader>
        <S.TaskTitle completed={task.completed}>
          {task.title}
        </S.TaskTitle>
        
        <S.TaskActions>
          <S.IconButton 
            onClick={handleCompleteClick}
            title={task.completed ? 'Отметить как невыполненную' : 'Отметить как выполненную'}
            aria-label={task.completed ? 'Отметить как невыполненную' : 'Отметить как выполненную'}
          >
            <FaCheck color={task.completed ? '#4CAF50' : '#999'} />
          </S.IconButton>
          
          <S.IconButton 
            onClick={handleEditClick}
            title="Редактировать задачу"
            aria-label="Редактировать задачу"
          >
            <FaEdit color="#2196F3" />
          </S.IconButton>
          
          <S.IconButton 
            onClick={handleDeleteClick}
            title="Удалить задачу"
            aria-label="Удалить задачу"
          >
            <FaTrash color="#F44336" />
          </S.IconButton>
        </S.TaskActions>
      </S.TaskHeader>
      
      <S.TaskMeta>
        <S.MetaItem title={`Категория: ${task.category}`}>
          <S.CategoryIcon>{categoryIcon}</S.CategoryIcon>
          <span style={{ fontSize: '0.75rem' }}>{task.category}</span>
        </S.MetaItem>
        
        <S.MetaItem color={priorityColor} title={`Приоритет: ${task.priority}`}>
          <div style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: priorityColor,
            marginRight: '4px'
          }} />
          <span style={{ fontSize: '0.75rem' }}>{task.priority}</span>
        </S.MetaItem>
        
        <S.StatusBadge color={statusColor} title={`Статус: ${task.status}`}>
          {task.status}
        </S.StatusBadge>
        
        {task.estimatedTime && (
          <S.MetaItem title={`Оценка времени: ${task.estimatedTime} минут`}>
            <FaClock size={10} />
            <span style={{ fontSize: '0.75rem', marginLeft: '2px' }}>{task.estimatedTime} мин</span>
          </S.MetaItem>
        )}
        
        {task.dueDate && (
          <S.MetaItem 
            color={isTaskOverdue && !task.completed ? '#F44336' : '#666'}
            title={`Срок: ${formatDate(task.dueDate)}`}
          >
            <FaCalendarAlt size={10} />
            <span style={{ 
              fontSize: '0.75rem', 
              marginLeft: '2px',
              whiteSpace: 'nowrap'
            }}>
              {formatDate(task.dueDate).split(',')[0]}
              {isTaskOverdue && !task.completed && ' ⚠️'}
            </span>
          </S.MetaItem>
        )}
      </S.TaskMeta>
      
      {task.description && (
        <S.TaskDescription completed={task.completed}>
          {showFullDescription || task.description.length <= 100 
            ? task.description 
            : `${task.description.substring(0, 100)}...`
          }
          {task.description.length > 100 && (
            <span style={{ 
              color: '#667eea', 
              cursor: 'pointer',
              marginLeft: '0.5rem',
              fontSize: '0.75rem',
              fontWeight: '500'
            }}>
              {showFullDescription ? 'Скрыть' : 'Показать больше'}
            </span>
          )}
        </S.TaskDescription>
      )}
      
      <S.TaskFooter>
        <div>
          {task.tags.length > 0 && (
            <S.TagsContainer>
              <FaTag style={{ color: '#999', fontSize: '0.75rem' }} />
              {task.tags.slice(0, 3).map(tag => (
                <S.Tag key={tag}>{tag}</S.Tag>
              ))}
              {task.tags.length > 3 && (
                <S.Tag title={task.tags.slice(3).join(', ')}>
                  +{task.tags.length - 3}
                </S.Tag>
              )}
            </S.TagsContainer>
          )}
        </div>
        
        <S.TimeInfo title={`Создано: ${getRelativeDate(task.createdAt)}`}>
          {getRelativeDate(task.createdAt)}
        </S.TimeInfo>
      </S.TaskFooter>
    </S.TaskItemContainer>
  );
};

export default TaskItem;