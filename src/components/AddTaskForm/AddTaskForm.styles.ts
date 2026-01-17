import styled from 'styled-components';

export const FormContainer = styled.div`
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  
  .dark-theme & {
    background: #1e1e1e;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    border: 1px solid #333;
  }
  
  @media (min-width: 375px) {
    padding: 1.125rem;
    border-radius: 12px;
  }
  
  @media (min-width: 768px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
    border-radius: 14px;
    
    .light-theme & {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    }
  }
  
  @media (min-width: 1024px) {
    padding: 1.5rem;
    border-radius: 16px;
    
    .light-theme & {
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
    }
    
    .dark-theme & {
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
    }
  }
`;

export const FormTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #333;
  }
  
  .dark-theme & {
    color: #e0e0e0;
  }
  
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

export const Input = styled.input`
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
  font-size: 0.75rem;
  transition: all 0.3s ease;
  width: 100%;
  position: relative;
  
  /* Стили для input[type="datetime-local"] */
  &[type="datetime-local"] {
    /* Стилизация иконки календаря */
    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
      padding: 0.25rem;
      border-radius: 4px;
      transition: all 0.3s ease;
      filter: invert(0);
    }
    
    /* Стили для текста placeholder */
    &::-webkit-datetime-edit-text,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-year-field,
    &::-webkit-datetime-edit-hour-field,
    &::-webkit-datetime-edit-minute-field {
      padding: 0 0.125rem;
    }
  }
  
  .light-theme & {
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    color: #333;
    
    /* Стилизация иконки календаря в светлой теме */
    &[type="datetime-local"]::-webkit-calendar-picker-indicator {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23666" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>');
      background-repeat: no-repeat;
      background-position: center;
      
      &:hover {
        background-color: rgba(102, 126, 234, 0.1);
        filter: invert(30%) sepia(40%) saturate(5000%) hue-rotate(220deg);
      }
    }
    
    &:focus {
      outline: none;
      border-color: #667eea;
      background-color: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      
      &[type="datetime-local"]::-webkit-calendar-picker-indicator {
        filter: invert(30%) sepia(40%) saturate(5000%) hue-rotate(220deg);
      }
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
    
    /* Стилизация иконки календаря в темной теме */
    &[type="datetime-local"]::-webkit-calendar-picker-indicator {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="%23b0b0d0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>');
      background-repeat: no-repeat;
      background-position: center;
      
      &:hover {
        background-color: rgba(138, 158, 255, 0.2);
        filter: invert(100%);
      }
    }
    
    &:focus {
      outline: none;
      border-color: #8a9eff;
      background-color: #333;
      box-shadow: 0 0 0 3px rgba(138, 158, 255, 0.2);
      
      &[type="datetime-local"]::-webkit-calendar-picker-indicator {
        filter: invert(100%);
      }
    }
    
    &::placeholder {
      color: #999;
      opacity: 0.8;
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.625rem 0.75rem;
    font-size: 0.875rem;
    
    &[type="datetime-local"] {
      &::-webkit-calendar-picker-indicator {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const TextArea = styled.textarea`
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
  font-size: 0.75rem;
  min-height: 70px;
  resize: vertical;
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
    min-height: 80px;
  }
`;

export const Select = styled.select`
  padding: 0.5rem 0.625rem;
  border-radius: 8px;
  font-size: 0.75rem;
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

export const TagInput = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  padding: 0.375rem;
  border-radius: 8px;
  min-height: 38px;
  transition: all 0.3s ease;
  width: 100%;
  
  .light-theme & {
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    
    &:focus-within {
      border-color: #667eea;
      background-color: white;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
  }
  
  .dark-theme & {
    border: 1px solid #444;
    background-color: #2d2d2d;
    
    &:focus-within {
      border-color: #8a9eff;
      background-color: #333;
      box-shadow: 0 0 0 3px rgba(138, 158, 255, 0.2);
    }
  }
  
  @media (min-width: 768px) {
    gap: 0.5rem;
    padding: 0.5rem;
    min-height: 42px;
  }
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.125rem;
  color: white;
  padding: 0.125rem 0.5rem;
  border-radius: 16px;
  font-size: 0.625rem;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  .light-theme & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #8a9eff 0%, #a366c9 100%);
  }
  
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
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.5);
  }
  
  @media (min-width: 768px) {
    width: 16px;
    height: 16px;
    font-size: 0.875rem;
    margin-left: 4px;
  }
`;

export const TagInputField = styled.input`
  border: none;
  outline: none;
  flex: 1;
  min-width: 80px;
  font-size: 0.75rem;
  background: transparent;
  transition: color 0.3s ease;
  
  .light-theme & {
    color: #333;
    
    &::placeholder {
      color: #666;
      opacity: 0.8;
    }
  }
  
  .dark-theme & {
    color: #e0e0e0;
    
    &::placeholder {
      color: #999;
      opacity: 0.8;
    }
  }
  
  @media (min-width: 768px) {
    font-size: 0.875rem;
    min-width: 100px;
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
  transition: border-color 0.3s ease;
  
  .dark-theme & {
    border-top: 1px solid #444;
  }
  
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

export const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
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
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`;

export const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  order: -1;
  
  .light-theme & {
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    color: #555;
    border: 1px solid #ddd;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%);
    color: #e0e0e0;
    border: 1px solid #444;
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 480px) {
    width: auto;
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
    order: 0;
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
  border-radius: 16px;
  font-size: 0.625rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  .light-theme & {
    background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
    color: #555;
    border: 1px solid #ddd;
    
    &:hover {
      background: linear-gradient(135deg, #667eea20 0%, #764ba220 100%);
      color: #667eea;
      border-color: #667eea;
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(102, 126, 234, 0.2);
    }
  }
  
  .dark-theme & {
    background: linear-gradient(135deg, #3a3a4a 0%, #2d2d3d 100%);
    color: #b0b0d0;
    border: 1px solid #555;
    
    &:hover {
      background: linear-gradient(135deg, #5a6fd830 0%, #6a429030 100%);
      color: #8a9eff;
      border-color: #5a6fd8;
      transform: translateY(-1px);
      box-shadow: 0 2px 6px rgba(90, 111, 216, 0.3);
    }
  }
  
  @media (min-width: 768px) {
    padding: 0.375rem 0.75rem;
    font-size: 0.75rem;
    border-radius: 20px;
  }
`;