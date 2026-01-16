import styled from 'styled-components';

export const FormContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  width: 100%;
  
  @media (min-width: 375px) {
    padding: 1.125rem;
    border-radius: 12px;
  }
  
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

export const FormTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  color: #333;
  line-height: 1.3;
  
  @media (min-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  width: 100%;
  
  @media (min-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  width: 100%;
`;

export const FullWidthGroup = styled(FormGroup)`
  grid-column: 1 / -1;
`;

export const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 500;
  color: #555;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const Input = styled.input`
  padding: 0.5rem 0.625rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.75rem;
  background-color: #fafafa;
  color: #333;
  transition: all 0.2s;
  width: 100%;
  
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

export const TextArea = styled.textarea`
  padding: 0.5rem 0.625rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.75rem;
  min-height: 70px;
  resize: vertical;
  background-color: #fafafa;
  color: #333;
  transition: all 0.2s;
  width: 100%;
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
    min-height: 80px;
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

export const Select = styled.select`
  padding: 0.5rem 0.625rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 0.75rem;
  background-color: #fafafa;
  color: #333;
  transition: border-color 0.2s;
  width: 100%;
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
  }
  
  &:focus {
    outline: none;
    border-color: #667eea;
    background-color: white;
  }
  
  option {
    background-color: white;
    color: #333;
  }
`;

// Остальные стили остаются, но уменьшаем размеры для мобильных:
export const TagInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  padding: 0.375rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  min-height: 38px;
  background-color: #fafafa;
  transition: all 0.2s;
  width: 100%;
  
  @media (min-width: 768px) {
    gap: 0.5rem;
    padding: 0.5rem;
    min-height: 42px;
  }
  
  &:focus-within {
    border-color: #667eea;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 0.125rem 0.5rem;
  border-radius: 16px;
  font-size: 0.625rem;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(102, 126, 234, 0.2);
  
  @media (min-width: 768px) {
    padding: 0.25rem 0.75rem;
    font-size: 0.75rem;
    border-radius: 20px;
  }
`;

export const RemoveTagButton = styled.button`
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  cursor: pointer;
  padding: 0;
  font-size: 0.75rem;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2px;
  
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
    font-size: 0.875rem;
    margin-left: 4px;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
`;

export const TagInputField = styled.input`
  border: none;
  outline: none;
  flex: 1;
  min-width: 80px;
  font-size: 0.75rem;
  background: transparent;
  color: #333;
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
    min-width: 100px;
  }
  
  &::placeholder {
    color: #666;
    opacity: 0.8;
  }
`;

export const FormActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #eee;
  width: 100%;
  
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%;
  
  @media (min-width: 480px) {
    width: auto;
    padding: 0.75rem 1.5rem;
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

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  color: #555;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  width: 100%;
  order: -1; /* Кнопка отмены первой на мобильных */
  
  @media (min-width: 480px) {
    width: auto;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    order: 0; /* Нормальный порядок на больших экранах */
  }
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const ErrorMessage = styled.div`
  color: #f44336;
  font-size: 0.625rem;
  margin-top: 0.125rem;
  
  @media (min-width: 768px) {
    font-size: 0.75rem;
    margin-top: 0.25rem;
  }
`;

export const QuickAddButtons = styled.div`
  display: flex;
  gap: 0.375rem;
  margin-top: 0.375rem;
  flex-wrap: wrap;
`;

export const QuickAddButton = styled.button`
  padding: 0.25rem 0.5rem;
  background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  color: #555;
  border: 1px solid #ddd;
  border-radius: 16px;
  font-size: 0.625rem;
  cursor: pointer;
  transition: all 0.2s;
  
  @media (min-width: 768px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    border-radius: 20px;
  }
  
  &:hover {
    background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
    color: #667eea;
    border-color: #667eea;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(102, 126, 234, 0.2);
  }
`;