import styled from 'styled-components';

export const StatsContainer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 100%;
`;

export const StatsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const StatsTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
  }
`;

export const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
`;

export const StatValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.25rem;
`;

export const StatLabel = styled.div`
  font-size: 0.75rem;
  opacity: 0.9;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const PriorityStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-top: 1rem;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const PriorityStat = styled.div<{ color: string }>`
  background: ${props => props.color};
  border-radius: 6px;
  padding: 0.5rem 0.25rem;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SuggestionItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.875rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const SuggestionIcon = styled.span`
  color: #FFC107;
  flex-shrink: 0;
  margin-top: 0.125rem;
`;

export const PriorityStatsContainer = styled.div`
  margin-top: 1.5rem;
`;

export const PriorityStatsTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  opacity: 0.9;
`;