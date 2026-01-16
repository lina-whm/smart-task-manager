import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { Task, TaskStats as TaskStatsType, Priority } from '../../types/task.types';
import { getPriorityColor } from '../../utils/taskHelpers';
import { generateSmartSuggestions } from '../../utils/taskHelpers';
import * as S from './TaskStats.styles';

interface TaskStatsProps {
  tasks: Task[];
  stats: TaskStatsType;
}

const TaskStats: React.FC<TaskStatsProps> = ({ tasks, stats }) => {
  const suggestions = generateSmartSuggestions(tasks);
  const completionRate = stats.total > 0 ? Math.round((stats.completed / stats.total) * 100) : 0;

  return (
    <S.StatsContainer>
      <S.StatsHeader>
        <S.StatsTitle>Статистика задач</S.StatsTitle>
        <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>
          {completionRate}% выполнено
        </div>
      </S.StatsHeader>
      
      <S.StatsGrid>
        {/* Верхний ряд: Всего задач и Выполнено */}
        <S.StatCard>
          <S.StatValue>{stats.total}</S.StatValue>
          <S.StatLabel>Всего задач</S.StatLabel>
        </S.StatCard>
        
        <S.StatCard>
          <S.StatValue>{stats.completed}</S.StatValue>
          <S.StatLabel>Выполнено</S.StatLabel>
        </S.StatCard>
        
        {/* Нижний ряд: В работе и Просрочено */}
        <S.StatCard>
          <S.StatValue>{stats.inProgress}</S.StatValue>
          <S.StatLabel>В работе</S.StatLabel>
        </S.StatCard>
        
        <S.StatCard>
          <S.StatValue>{stats.overdue}</S.StatValue>
          <S.StatLabel>Просрочено</S.StatLabel>
        </S.StatCard>
      </S.StatsGrid>
      
      <S.PriorityStatsContainer>
        <S.PriorityStatsTitle>Распределение по приоритетам</S.PriorityStatsTitle>
        <S.PriorityStats>
          {Object.entries(stats.byPriority).map(([priority, count]) => (
            <S.PriorityStat
              key={priority}
              color={getPriorityColor(priority as Priority)}
              title={`${count} ${priority}`}
            >
              {count} {priority}
            </S.PriorityStat>
          ))}
        </S.PriorityStats>
      </S.PriorityStatsContainer>
      
      {suggestions.length > 0 && (
        <div style={{ marginTop: '1.5rem' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            marginBottom: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: '600'
          }}>
            <FaLightbulb />
            <span>Умные подсказки</span>
          </div>
          {suggestions.map((suggestion, index) => (
            <S.SuggestionItem key={index}>
              <S.SuggestionIcon>
                <FaLightbulb />
              </S.SuggestionIcon>
              <span>{suggestion}</span>
            </S.SuggestionItem>
          ))}
        </div>
      )}
    </S.StatsContainer>
  );
};

export default TaskStats;