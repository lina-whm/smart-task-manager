import styled from 'styled-components';

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: #666;
`;

export const EmptyStateIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  opacity: 0.3;
`;

export const EmptyStateTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

export const EmptyStateDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  max-width: 400px;
  line-height: 1.5;
`;

export const SuggestionList = styled.ul`
  text-align: left;
  max-width: 400px;
  margin: 1rem auto;
  padding-left: 1.5rem;
`;

export const SuggestionItem = styled.li`
  margin-bottom: 0.5rem;
  line-height: 1.4;
`;