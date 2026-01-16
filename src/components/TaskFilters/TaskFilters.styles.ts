import styled from 'styled-components';

export const FiltersContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.25rem; /* Уменьшил для мобильных */
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  @media (min-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
    border-radius: 14px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }
  
  @media (min-width: 1024px) {
    padding: 1.5rem;
    border-radius: 16px;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const FiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
  
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const FiltersTitle = styled.h3`
  font-size: 1.125rem; /* Меньше для мобильных */
  font-weight: 600;
  margin: 0;
  color: #333;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* Одна колонка для мобильных */
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FilterLabel = styled.label`
  font-size: 0.8125rem; /* Меньше для мобильных */
  font-weight: 500;
  color: #555;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Select = styled.select`
  padding: 0.5rem 0.625rem; /* Уменьшил для мобильных */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.8125rem; /* Меньше для мобильных */
  background-color: #fafafa;
  color: #333;
  transition: all 0.2s;
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  option {
    background-color: white;
    color: #333;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem 0.625rem; /* Уменьшил для мобильных */
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.8125rem; /* Меньше для мобильных */
  background-color: #fafafa;
  color: #333;
  transition: all 0.2s;
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
  
  &::placeholder {
    color: #666;
    opacity: 0.8;
  }
`;

export const FilterActions = styled.div`
  display: flex;
  flex-direction: column; /* Колонка для мобильных */
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const SortSelect = styled(Select)`
  width: 100%; /* На всю ширину на мобильных */
  
  @media (min-width: 640px) {
    width: auto;
    min-width: 150px;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem; /* Меньше для мобильных */
  color: #555;
  cursor: pointer;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Checkbox = styled.input`
  width: 1rem; /* Меньше для мобильных */
  height: 1rem;
  border-radius: 4px;
  cursor: pointer;
  
  @media (min-width: 768px) {
    width: 1.125rem;
    height: 1.125rem;
  }
  
  &:checked {
    background-color: #667eea;
    border-color: #667eea;
  }
`;

export const ClearButton = styled.button`
  padding: 0.5rem 1rem; /* Уменьшил для мобильных */
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.8125rem; /* Меньше для мобильных */
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%; /* На всю ширину на мобильных */
  
  @media (min-width: 640px) {
    width: auto;
    padding: 0.625rem 1.5rem;
    font-size: 0.875rem;
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const FilterButtonsContainer = styled.div`
  display: flex;
  flex-direction: column; /* Колонка для мобильных */
  gap: 0.75rem;
  width: 100%;
  
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    width: auto;
  }
`;