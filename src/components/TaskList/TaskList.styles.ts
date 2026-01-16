import styled from 'styled-components';

export const TaskListContainer = styled.div``;

export const TaskListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const TaskListTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

export const TaskCount = styled.span`
  font-size: 0.875rem;
  color: #666;
  background: #f5f5f5;
  padding: 0.25rem 
  border-radius: 12px;
`;

export const TaskItemsContainer = styled.div`
  min-height: 400px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1rem;
  color: #666;
`;

export const TaskSummary = styled.div`
  background: #f8f9fa;
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #666;
  text-align: center;
`;