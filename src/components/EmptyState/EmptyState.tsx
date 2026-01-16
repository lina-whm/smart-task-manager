import React from 'react';
import { FaClipboardList, FaLightbulb } from 'react-icons/fa';
import * as S from './EmptyState.styles';

interface EmptyStateProps {
  type: 'all' | 'filtered';
  suggestions?: string[];
}

const EmptyState: React.FC<EmptyStateProps> = ({ type, suggestions = [] }) => {
  if (type === 'all') {
    return (
      <S.EmptyStateContainer>
        <S.EmptyStateIcon>
          <FaClipboardList />
        </S.EmptyStateIcon>
        <S.EmptyStateTitle>Задач пока нет</S.EmptyStateTitle>
        <S.EmptyStateDescription>
          Начните с добавления первой задачи. Разбивайте большие проекты на небольшие, управляемые задачи.
        </S.EmptyStateDescription>
        
        {suggestions.length > 0 && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
              <FaLightbulb color="#FFC107" />
              <strong>Умные подсказки:</strong>
            </div>
            <S.SuggestionList>
              {suggestions.map((suggestion, index) => (
                <S.SuggestionItem key={index}>{suggestion}</S.SuggestionItem>
              ))}
            </S.SuggestionList>
          </>
        )}
      </S.EmptyStateContainer>
    );
  }
  
  return (
    <S.EmptyStateContainer>
      <S.EmptyStateIcon>
        <FaClipboardList />
      </S.EmptyStateIcon>
      <S.EmptyStateTitle>Задачи не найдены</S.EmptyStateTitle>
      <S.EmptyStateDescription>
        Попробуйте изменить фильтры или условия поиска.
      </S.EmptyStateDescription>
    </S.EmptyStateContainer>
  );
};

export default EmptyState;