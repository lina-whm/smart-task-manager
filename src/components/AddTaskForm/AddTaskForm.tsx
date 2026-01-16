import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task, Priority, TaskCategory, TaskStatus } from '../../types/task.types';
import { priorities, categories, statuses, getCategoryIcon } from '../../utils/taskHelpers';
import { format, parseISO } from 'date-fns';
import * as S from './AddTaskForm.styles';

interface AddTaskFormProps {
  onAddTask: (task: Task) => void;
  editingTask?: Task | null;
  onCancelEdit?: () => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ 
  onAddTask, 
  editingTask,
  onCancelEdit 
}) => {
  // Состояния
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('средний');
  const [category, setCategory] = useState<TaskCategory>('работа');
  const [status, setStatus] = useState<TaskStatus>('ожидает');
  const [dueDate, setDueDate] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Эффект для загрузки данных при редактировании
  useEffect(() => {
    console.log('AddTaskForm: editingTask изменился', editingTask);
    
    if (editingTask) {
      console.log('Загружаем данные задачи в форму:', editingTask.title);
      
      // Заполняем форму данными из editingTask
      setTitle(editingTask.title || '');
      setDescription(editingTask.description || '');
      setPriority(editingTask.priority);
      setCategory(editingTask.category);
      setStatus(editingTask.status);
      
      // Обработка даты
      if (editingTask.dueDate) {
        try {
          let dateObj: Date;
          
          if (typeof editingTask.dueDate === 'string') {
            dateObj = parseISO(editingTask.dueDate);
          } else {
            dateObj = editingTask.dueDate;
          }
          
          if (!isNaN(dateObj.getTime())) {
            const formattedDate = format(dateObj, "yyyy-MM-dd'T'HH:mm");
            console.log('Дата отформатирована:', formattedDate);
            setDueDate(formattedDate);
          } else {
            console.warn('Неверная дата в задаче');
            setDueDate('');
          }
        } catch (error) {
          console.error('Ошибка при форматировании даты:', error);
          setDueDate('');
        }
      } else {
        setDueDate('');
      }
      
      // Обработка времени
      setEstimatedTime(editingTask.estimatedTime?.toString() || '');
      
      // Обработка тегов
      setTags(editingTask.tags || []);
      
      // Сброс ошибок
      setErrors({});
    } else {
      // Сброс формы если не редактируем
      resetForm();
    }
  }, [editingTask]); // Зависимость от editingTask

  const resetForm = () => {
    console.log('Сброс формы');
    setTitle('');
    setDescription('');
    setPriority('средний');
    setCategory('работа');
    setStatus('ожидает');
    setDueDate('');
    setEstimatedTime('');
    setTags([]);
    setTagInput('');
    setErrors({});
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!title.trim()) {
      newErrors.title = 'Название обязательно';
    }
    
    if (estimatedTime && (isNaN(Number(estimatedTime)) || Number(estimatedTime) < 0)) {
      newErrors.estimatedTime = 'Время должно быть положительным числом';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const now = new Date();
    let dueDateObj: Date | undefined;
    
    if (dueDate) {
      dueDateObj = new Date(dueDate);
      if (isNaN(dueDateObj.getTime())) {
        dueDateObj = undefined;
      }
    }
    
    const task: Task = {
      id: editingTask?.id || uuidv4(),
      title: title.trim(),
      description: description.trim(),
      completed: editingTask?.completed || false,
      priority,
      status,
      category,
      dueDate: dueDateObj,
      createdAt: editingTask?.createdAt || now,
      updatedAt: now,
      tags,
      estimatedTime: estimatedTime ? parseInt(estimatedTime) : undefined,
      timeSpent: editingTask?.timeSpent || 0,
      subtasks: editingTask?.subtasks || []
    };
    
    console.log('Сохранение задачи:', task);
    onAddTask(task);
    
    if (!editingTask) {
      resetForm();
    }
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const quickAddTask = (type: string) => {
    if (editingTask) return; // Не использовать быстрые добавления в режиме редактирования
    
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
    let quickTask: Partial<Task> = {};
    
    switch (type) {
      case 'urgent':
        quickTask = {
          title: 'Срочная задача',
          priority: 'срочный',
          category: 'работа'
        };
        break;
      case 'today':
        quickTask = {
          title: 'Задача на сегодня',
          dueDate: now,
          priority: 'высокий'
        };
        break;
      case 'personal':
        quickTask = {
          title: 'Личная задача',
          category: 'личное',
          priority: 'средний'
        };
        break;
      case 'learning':
        quickTask = {
          title: 'Цель обучения',
          category: 'обучение',
          estimatedTime: 60
        };
        break;
    }
    
    if (quickTask.title) {
      setTitle(quickTask.title);
      if (quickTask.priority) setPriority(quickTask.priority);
      if (quickTask.category) setCategory(quickTask.category);
      if (quickTask.dueDate) setDueDate(format(quickTask.dueDate, "yyyy-MM-dd'T'HH:mm"));
      if (quickTask.estimatedTime) setEstimatedTime(quickTask.estimatedTime.toString());
    }
  };

  console.log('Состояние формы:', {
    title,
    description,
    priority,
    category,
    status,
    dueDate,
    estimatedTime,
    tags,
    isEditing: !!editingTask
  });

  return (
    <S.FormContainer>
      <S.FormTitle>
        {editingTask ? (
          <>
            ✏️ Редактировать задачу
            <div style={{ 
              fontSize: '0.75rem', 
              color: '#666', 
              fontWeight: 'normal',
              marginTop: '0.25rem'
            }}>
              Редактирование: "{editingTask.title.substring(0, 30)}..."
            </div>
          </>
        ) : 'Добавить новую задачу'}
      </S.FormTitle>
      
      <form onSubmit={handleSubmit}>
        <S.FullWidthGroup>
          <S.Label>Название *</S.Label>
          <S.Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Что нужно сделать?"
            autoFocus={!!editingTask}
          />
          {errors.title && <S.ErrorMessage>{errors.title}</S.ErrorMessage>}
        </S.FullWidthGroup>

        <S.FullWidthGroup>
          <S.Label>Описание</S.Label>
          <S.TextArea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Добавьте детали, заметки или инструкции..."
            rows={3}
          />
        </S.FullWidthGroup>

        <S.FormGrid>
          <S.FormGroup>
            <S.Label>Приоритет</S.Label>
            <S.Select 
              value={priority} 
              onChange={(e) => setPriority(e.target.value as Priority)}
            >
              {priorities.map(p => (
                <option key={p} value={p}>
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </option>
              ))}
            </S.Select>
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Категория</S.Label>
            <S.Select 
              value={category} 
              onChange={(e) => setCategory(e.target.value as TaskCategory)}
            >
              {categories.map(c => (
                <option key={c} value={c}>
                  {getCategoryIcon(c)} {c.charAt(0).toUpperCase() + c.slice(1)}
                </option>
              ))}
            </S.Select>
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Статус</S.Label>
            <S.Select 
              value={status} 
              onChange={(e) => setStatus(e.target.value as TaskStatus)}
            >
              {statuses.map(s => (
                <option key={s} value={s}>
                  {s.charAt(0).toUpperCase() + s.slice(1)}
                </option>
              ))}
            </S.Select>
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Срок выполнения</S.Label>
            <S.Input
              type="datetime-local"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Оценка времени (минуты)</S.Label>
            <S.Input
              type="number"
              value={estimatedTime}
              onChange={(e) => setEstimatedTime(e.target.value)}
              placeholder="например, 60"
              min="0"
            />
            {errors.estimatedTime && <S.ErrorMessage>{errors.estimatedTime}</S.ErrorMessage>}
          </S.FormGroup>
        </S.FormGrid>

        <S.FullWidthGroup>
          <S.Label>Теги</S.Label>
          <S.TagInput>
            {tags.map(tag => (
              <S.Tag key={tag}>
                {tag}
                <S.RemoveTagButton
                  type="button"
                  onClick={() => handleRemoveTag(tag)}
                >
                  ×
                </S.RemoveTagButton>
              </S.Tag>
            ))}
            <S.TagInputField
              type="text"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleAddTag}
              placeholder="Добавить теги (нажмите Enter)"
            />
          </S.TagInput>
        </S.FullWidthGroup>

        {!editingTask && (
          <S.FullWidthGroup>
            <S.Label>Быстрое добавление</S.Label>
            <S.QuickAddButtons>
              <S.QuickAddButton type="button" onClick={() => quickAddTask('urgent')}>
                🚨 Срочная задача
              </S.QuickAddButton>
              <S.QuickAddButton type="button" onClick={() => quickAddTask('today')}>
                📅 На сегодня
              </S.QuickAddButton>
              <S.QuickAddButton type="button" onClick={() => quickAddTask('personal')}>
                🏠 Личная
              </S.QuickAddButton>
              <S.QuickAddButton type="button" onClick={() => quickAddTask('learning')}>
                📚 Обучение
              </S.QuickAddButton>
            </S.QuickAddButtons>
          </S.FullWidthGroup>
        )}

        <S.FormActions>
          {editingTask && onCancelEdit && (
            <S.CancelButton 
              type="button" 
              onClick={onCancelEdit}
            >
              ❌ Отмена редактирования
            </S.CancelButton>
          )}
          <S.SubmitButton type="submit">
            {editingTask ? '💾 Сохранить изменения' : 'Добавить задачу'}
          </S.SubmitButton>
        </S.FormActions>
      </form>
    </S.FormContainer>
  );
};

export default AddTaskForm;