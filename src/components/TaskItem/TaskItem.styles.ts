import styled from 'styled-components';

export const TaskItemContainer = styled.div<{ completed: boolean; priority: string }>`
  background: white;
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 0.75rem;
  border-left: 4px solid ${props => props.priority};
  opacity: ${props => props.completed ? 0.7 : 1};
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.75rem;
`;

export const TaskTitle = styled.div<{ completed: boolean }>`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.completed ? '#999' : '#333'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  flex: 1;
  margin-right: 1rem;
`;

export const TaskActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const IconButton = styled.button`
  background: #fafafa;
  border: 1px solid #e0e0e0;
  color: #666;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
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
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  font-size: 0.75rem;
  color: #666;
`;

export const MetaItem = styled.div<{ color?: string }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${props => props.color || '#666'};
`;

export const TaskDescription = styled.div<{ completed: boolean }>`
  font-size: 0.875rem;
  color: ${props => props.completed ? '#999' : '#666'};
  margin-bottom: 0.75rem;
  line-height: 1.5;
`;

export const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.75rem;
  border-top: 1px solid #eee;
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
`;

export const Tag = styled.span`
  background: #e9ecef;
  color: #495057;
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  font-size: 0.6875rem;
`;

export const TimeInfo = styled.div`
  font-size: 0.75rem;
  color: #999;
`;

export const StatusBadge = styled.span<{ color: string }>`
  background: ${props => props.color}15;
  color: ${props => props.color};
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  font-size: 0.6875rem;
  font-weight: 500;
`;

export const CategoryIcon = styled.span`
  font-size: 0.875rem;
  margin-right: 0.25rem;
`;