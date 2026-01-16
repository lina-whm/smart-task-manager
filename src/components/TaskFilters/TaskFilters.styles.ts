import styled from 'styled-components';

export const FiltersContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const FiltersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const FiltersTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: #333;
`;

export const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FilterLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: #555;
`;

export const Select = styled.select`
  padding: 0.625rem 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.875rem;
  background-color: #fafafa;
  color: #333;
  transition: all 0.2s;
  
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
  padding: 0.625rem 0.75rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.875rem;
  background-color: #fafafa;
  color: #333;
  transition: all 0.2s;
  
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
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

export const SortSelect = styled(Select)`
  width: auto;
  min-width: 150px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #555;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 1.125rem;
  height: 1.125rem;
  border-radius: 4px;
  cursor: pointer;
  
  &:checked {
    background-color: #667eea;
    border-color: #667eea;
  }
`;

export const ClearButton = styled.button`
  padding: 0.625rem 1.5rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  
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
  gap: 1rem;
  align-items: center;
`;