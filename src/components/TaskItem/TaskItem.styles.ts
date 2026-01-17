import styled from 'styled-components';

export const TaskItemContainer = styled.div<{ completed: boolean; priority: string }>`
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-left: 3px solid ${props => props.priority};
  opacity: ${props => props.completed ? 0.7 : 1};
  transition: all 0.3s ease;
  width: 100%;
  
  .light-theme & {
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
  }
  
  .dark-theme & {
    background: #1e1e1e;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border: 1px solid #333;
    
    &:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      transform: translateY(-2px);
    }
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
  flex: 1;
  word-break: break-word;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: ${props => props.completed ? '#999' : '#333'};
  }
  
  .dark-theme & {
    color: ${props => props.completed ? '#888' : '#e0e0e0'};
  }
  
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  
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
  border: 1px solid;
  cursor: pointer;
  padding: 0.375rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  min-width: 28px;
  min-height: 28px;
  
  .light-theme & {
    background: #fafafa;
    border-color: #e0e0e0;
    color: #666;
    
    &:hover {
      background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
      color: #667eea;
      border-color: #667eea;
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(102, 126, 234, 0.2);
    }
  }
  
  .dark-theme & {
    background: #2a2d3e;
    border-color: #444;
    color: #b0b0d0;
    
    &:hover {
      background: linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%);
      color: #ffffff;
      border-color: #667eea;
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(102, 126, 234, 0.3);
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.5rem;
    min-width: 36px;
    min-height: 36px;
  }
`;

export const TaskMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.625rem;
  
  .light-theme & {
    color: #666;
  }
  
  .dark-theme & {
    color: #aaa;
  }
  
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
  color: ${props => props.color || ''};
  font-size: 0.625rem;
  transition: color 0.3s ease;
  
  .dark-theme &:not([style*="color"]) {
    color: #aaa;
  }
  
  @media (min-width: 768px) {
    font-size: 0.75rem;
    gap: 0.25rem;
  }
`;

export const TaskDescription = styled.div<{ completed: boolean }>`
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  line-height: 1.4;
  word-break: break-word;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: ${props => props.completed ? '#999' : '#666'};
  }
  
  .dark-theme & {
    color: ${props => props.completed ? '#888' : '#ccc'};
  }
  
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
  border-top: 1px solid;
  transition: border-color 0.3s ease;
  
  .light-theme & {
    border-top-color: #eee;
  }
  
  .dark-theme & {
    border-top-color: #444;
  }
  
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
  padding: 0.125rem 0.375rem;
  border-radius: 10px;
  font-size: 0.5625rem;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: #e9ecef;
    color: #495057;
  }
  
  .dark-theme & {
    background: #2d2d2d;
    color: #ccc;
  }
  
  @media (min-width: 768px) {
    padding: 0.125rem 0.5rem;
    border-radius: 12px;
    font-size: 0.6875rem;
  }
`;

export const TimeInfo = styled.div`
  font-size: 0.625rem;
  transition: color 0.3s ease;
  text-align: right;
  
  .light-theme & {
    color: #999;
  }
  
  .dark-theme & {
    color: #888;
  }
  
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
  transition: all 0.3s ease;
  
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