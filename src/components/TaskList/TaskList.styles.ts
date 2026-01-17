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
  margin: 0;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #333;
  }
  
  .dark-theme & {
    color: #e0e0e0;
  }
`;

export const TaskCount = styled.span`
  font-size: 0.875rem;
  background: #f5f5f5;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  .light-theme & {
    color: #666;
    background: #f5f5f5;
  }
  
  .dark-theme & {
    color: #ccc;
    background: #2d2d2d;
  }
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
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #666;
  }
  
  .dark-theme & {
    color: #aaa;
  }
`;

export const TaskSummary = styled.div`
  border-radius: 8px;
  padding: 1rem;
  margin-top: 1rem;
  font-size: 0.875rem;
  text-align: center;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: #f8f9fa;
    color: #666;
  }
  
  .dark-theme & {
    background: #2d2d2d;
    color: #ccc;
  }
`;