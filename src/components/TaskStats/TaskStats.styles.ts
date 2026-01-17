import styled from 'styled-components';

export const StatsContainer = styled.div`
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  overflow: hidden;
  width: 100%;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
    border: 1px solid #3a3a4a;
  }
  
  @media (min-width: 375px) {
    padding: 1.125rem;
    border-radius: 12px;
  }
  
  @media (min-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
    
    .light-theme & {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }
    
    .dark-theme & {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const StatsHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  margin-bottom: 1rem;
  color: white;
  
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
  }
`;

export const StatsTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) and (max-width: 1022px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 0.75rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70px;
  
  @media (min-width: 768px) {
    padding: 1rem;
    min-height: 80px;
  }
  
  @media (min-width: 1024px) {
    min-height: 85px;
  }
`;

export const StatValue = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.25rem;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 1.75rem;
  }
`;

export const StatLabel = styled.div`
  font-size: 0.625rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.9);
  
  @media (min-width: 768px) {
    font-size: 0.6875rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 0.75rem;
    white-space: nowrap;
  }
`;

export const PriorityStatsContainer = styled.div`
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    margin-top: 1.5rem;
  }
`;

export const PriorityStatsTitle = styled.div`
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.375rem;
  opacity: 0.9;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }
`;

export const PriorityStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.375rem;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5rem;
  }
  
  @media (min-width: 768px) {
    gap: 0.75rem;
  }
`;

export const PriorityStat = styled.div<{ color: string }>`
  background: ${props => props.color};
  border-radius: 6px;
  padding: 0.375rem 0.25rem;
  text-align: center;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  color: white;
  
  @media (min-width: 768px) {
    font-size: 0.6875rem;
    padding: 0.5rem 0.25rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 0.75rem;
    padding: 0.5rem;
  }
`;

export const SuggestionItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.375rem;
  display: flex;
  align-items: flex-start;
  gap: 0.375rem;
  font-size: 0.75rem;
  color: white;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    gap: 0.5rem;
  }
`;

export const SuggestionIcon = styled.span`
  color: #FFC107;
  flex-shrink: 0;
  margin-top: 0.125rem;
  font-size: 0.75rem;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;