import styled from 'styled-components';

export const FiltersContainer = styled.div`
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.25rem;
  width: 100%;
  overflow: visible;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }
  
  .dark-theme & {
    background: #1e1e1e;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #333;
  }
  
  @media (min-width: 375px) {
    padding: 1.125rem;
    border-radius: 11px;
  }
  
  @media (min-width: 414px) {
    padding: 1.25rem;
    border-radius: 12px;
  }
  
  @media (min-width: 768px) {
    padding: 1.5rem;
    border-radius: 14px;
    margin-bottom: 1.5rem;
    
    .light-theme & {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
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
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #333;
  }
  
  .dark-theme & {
    color: #e0e0e0;
  }
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.875rem;
  margin-bottom: 1rem;
  width: 100%;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 768px) {
    gap: 1rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

export const FilterLabel = styled.label`
  font-size: 0.8125rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #555;
  }
  
  .dark-theme & {
    color: #aaa;
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Select = styled.select`
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  transition: all 0.3s ease;
  width: 100%;
  
  .light-theme & {
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    color: #333;
    
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
  }
  
  .dark-theme & {
    border: 1px solid #444;
    background-color: #2d2d2d;
    color: #e0e0e0;
    
    &:focus {
      outline: none;
      border-color: #8a9eff;
      background-color: #333;
      box-shadow: 0 0 0 3px rgba(138, 158, 255, 0.2);
    }
    
    option {
      background-color: #2d2d2d;
      color: #e0e0e0;
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
`;

export const SearchInput = styled.input`
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
  font-size: 0.8125rem;
  transition: all 0.3s ease;
  width: 100%;
  
  .light-theme & {
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    color: #333;
    
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
  }
  
  .dark-theme & {
    border: 1px solid #444;
    background-color: #2d2d2d;
    color: #e0e0e0;
    
    &:focus {
      outline: none;
      border-color: #8a9eff;
      background-color: #333;
      box-shadow: 0 0 0 3px rgba(138, 158, 255, 0.2);
    }
    
    &::placeholder {
      color: #999;
      opacity: 0.8;
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
`;

export const FilterActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid;
  width: 100%;
  transition: border-color 0.3s ease;
  
  .light-theme & {
    border-top-color: #eee;
  }
  
  .dark-theme & {
    border-top-color: #444;
  }
`;

export const FilterTopRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FilterBottomRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  
  @media (min-width: 1024px) {
    justify-content: flex-end;
    gap: 1.5rem;
  }
`;

export const SortSelect = styled(Select)`
  width: 100%;
  
  @media (min-width: 1024px) {
    width: auto;
    min-width: 200px;
    margin-right: auto;
  }
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8125rem;
  cursor: pointer;
  white-space: nowrap;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #555;
  }
  
  .dark-theme & {
    color: #ccc;
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Checkbox = styled.input`
  width: 1rem;
  height: 1rem;
  border-radius: 4px;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.3s ease;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  
  .light-theme & {
    border: 2px solid #ddd;
    background-color: white;
    
    &:checked {
      background-color: #667eea;
      border-color: #667eea;
    }
    
    &:checked:after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
  
  .dark-theme & {
    border: 2px solid #666;
    background-color: #2d2d2d;
    
    &:checked {
      background-color: #8a9eff;
      border-color: #8a9eff;
    }
    
    &:checked:after {
      content: '✓';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 0.75rem;
      font-weight: bold;
    }
  }
  
  @media (min-width: 768px) {
    width: 1.125rem;
    height: 1.125rem;
    
    &:checked:after {
      font-size: 0.875rem;
    }
  }
`;

export const ClearButton = styled.button`
  padding: 0.625rem 1.5rem;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  white-space: nowrap;
  flex-shrink: 0;
  
  .light-theme & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
    }
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%);
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(90, 111, 216, 0.4);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 480px) {
    width: auto;
  }
  
  @media (min-width: 1024px) {
    padding: 0.75rem 2rem;
    min-width: 160px;
    margin-left: auto;
  }
`;

export const CheckboxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  
  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1.25rem;
  }
  
  @media (min-width: 640px) {
    width: auto;
  }
`;

export const SortAndResetContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  width: 100%;
  
  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 1rem;
  }
  
  @media (min-width: 768px) {
    grid-template-columns: auto auto;
    gap: 1.5rem;
    width: 100%;
  }
  
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 1.5rem;
  }
`;