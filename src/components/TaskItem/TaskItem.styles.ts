import styled from 'styled-components';

export const TaskItemContainer = styled.div<{ completed: boolean; priority: string }>`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-left: 3px solid ${props => props.priority};
  opacity: ${props => props.completed ? 0.7 : 1};
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  width: 100%;
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  @media (min-width: 768px) {
    padding: 1.25rem;
    border-left: 4px solid ${props => props.priority};
    border-radius: 12px;
    margin-bottom: 0.75rem;
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
  
  @media (min-width: 768px) {
    margin-bottom: 0.75rem;
    gap: 1rem;
  }
`;

export const TaskTitle = styled.div<{ completed: boolean }>`
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.completed ? '#999' : '#333'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  flex: 1;
  word-break: break-word;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    gap: 0.5rem;
  }
`;

export const IconButton = styled.button`
  background: #fafafa;
  border: 1px solid #e0e0e0;
  color: #666;
  cursor: pointer;
  padding: 0.375rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  min-width: 28px;
  min-height: 28px;
  
  @media (min-width: 768px) {
    padding: 0.5rem;
    min-width: 36px;
    min-height: 36px;
  }
  
  &:hover {
    background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
    color: #667eea;
    border-color: #667eea;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(102, 126, 234, 0.2);
  }
`;

export const TaskMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.625rem;
  color: #666;
  
  @media (min-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    font-size: 0.75rem;
  }
`;

export const MetaItem = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  gap: 0.125rem;
  color: ${props => props.color || '#666'};
  font-size: 0.625rem;
  
  @media (min-width: 768px) {
    font-size: 0.75rem;
    gap: 0.25rem;
  }
`;

export const TaskDescription = styled.div<{ completed: boolean }>`
  font-size: 0.75rem;
  color: ${props => props.completed ? '#999' : '#666'};
  margin-bottom: 0.5rem;
  line-height: 1.4;
  word-break: break-word;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
    line-height: 1.5;
  }
`;

export const TaskFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
  
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  align-items: center;
`;

export const Tag = styled.span`
  background: #e9ecef;
  color: #495057;
  padding: 0.125rem 0.375rem;
  border-radius: 10px;
  font-size: 0.5625rem;
  
  @media (min-width: 768px) {
    padding: 0.125rem 0.5rem;
    border-radius: 12px;
    font-size: 0.6875rem;
  }
`;

export const TimeInfo = styled.div`
  font-size: 0.625rem;
  color: #999;
  text-align: right;
  
  @media (min-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const StatusBadge = styled.span<{ color: string }>`
  background: ${props => props.color}15;
  color: ${props => props.color};
  padding: 0.125rem 0.375rem;
  border-radius: 10px;
  font-size: 0.5625rem;
  font-weight: 500;
  white-space: nowrap;
  
  @media (min-width: 768px) {
    padding: 0.125rem 0.5rem;
    border-radius: 12px;
    font-size: 0.6875rem;
  }
`;

export const CategoryIcon = styled.span`
  font-size: 0.75rem;
  margin-right: 0.125rem;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-right: 0.25rem;
  }
`;