import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskFilters } from './types/task.types';
import { filterTasks, calculateStats, sortTasks } from './utils/taskHelpers';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDebounce } from './hooks/useDebounce';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskFiltersComponent from './components/TaskFilters/TaskFilters';
import TaskStats from './components/TaskStats/TaskStats';
import * as S from './App.styles';

// Начальные задачи для демонстрации
const initialTasks: Task[] = [
  {
    id: uuidv4(),
    title: 'Спланировать архитектуру проекта',
    description: 'Разработать общую структуру и выбрать подходящие технологии',
    completed: true,
    priority: 'высокий',
    status: 'выполнено',
    category: 'работа',
    dueDate: new Date('2024-01-15'),
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-12'),
    tags: ['планирование', 'архитектура'],
    estimatedTime: 120,
    timeSpent: 135
  },
  {
    id: uuidv4(),
    title: 'Реализовать систему аутентификации',
    description: 'Создать безопасный вход и регистрацию с JWT токенами',
    completed: false,
    priority: 'срочный',
    status: 'в работе',
    category: 'работа',
    dueDate: new Date('2024-01-20'),
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-14'),
    tags: ['безопасность', 'бэкенд'],
    estimatedTime: 180
  },
  {
    id: uuidv4(),
    title: 'Утренняя тренировка',
    description: '30 минут кардио и силовых упражнений',
    completed: false,
    priority: 'средний',
    status: 'ожидает',
    category: 'здоровье',
    dueDate: new Date('2024-01-16T08:00:00'),
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-14'),
    tags: ['фитнес', 'рутина']
  },
  {
    id: uuidv4(),
    title: 'Изучить продвинутые паттерны React',
    description: 'Изучить оптимизацию хуков, Context API и методы повышения производительности',
    completed: false,
    priority: 'высокий',
    status: 'ожидает',
    category: 'обучение',
    dueDate: new Date('2024-01-25'),
    createdAt: new Date('2024-01-13'),
    updatedAt: new Date('2024-01-13'),
    tags: ['react', 'обучение'],
    estimatedTime: 240
  },
  {
    id: uuidv4(),
    title: 'Покупка продуктов',
    description: 'Купить овощи, фрукты и предметы домашнего обихода',
    completed: true,
    priority: 'низкий',
    status: 'выполнено',
    category: 'личное',
    dueDate: new Date('2024-01-14'),
    createdAt: new Date('2024-01-13'),
    updatedAt: new Date('2024-01-14'),
    tags: ['покупки', 'поручения']
  }
];

const initialFilters: TaskFilters = {
  status: 'все',
  priority: 'все',
  category: 'все',
  search: '',
  showCompleted: true,
  showOverdue: false
};

const App: React.FC = () => {
  const [tasks, setTasks] = useLocalStorage<Task[]>('smart-task-manager-tasks', initialTasks);
  const [filters, setFilters] = useState<TaskFilters>(initialFilters);
  const [sortBy, setSortBy] = useState('default');
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  
  const debouncedSearch = useDebounce(filters.search, 300);
  const effectiveFilters = { ...filters, search: debouncedSearch };
  
  const filteredTasks = filterTasks(tasks, effectiveFilters);
  const sortedTasks = sortTasks(filteredTasks, sortBy);
  const stats = calculateStats(tasks);

  useEffect(() => {
    // Обновление заголовка с количеством задач
    const pendingTasks = tasks.filter(t => !t.completed).length;
    document.title = `Умный менеджер задач ${pendingTasks > 0 ? `(${pendingTasks})` : ''}`;
  }, [tasks]);

  const handleAddTask = (task: Task) => {
    if (editingTask) {
      // Обновление существующей задачи
      setTasks(prevTasks => 
        prevTasks.map(t => t.id === task.id ? task : t)
      );
      setEditingTask(null);
    } else {
      // Добавление новой задачи
      setTasks(prevTasks => [task, ...prevTasks]);
    }
  };

  const handleToggleComplete = (id: string) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              status: !task.completed ? 'выполнено' : 'ожидает',
              updatedAt: new Date()
            }
          : task
      )
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const handleEditTask = (task: Task) => {
    console.log('Начинаем редактирование задачи:', task.title);
    
    // Создаем глубокую копию задачи для редактирования
    const taskForEditing: Task = {
      ...task,
      dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
      createdAt: new Date(task.createdAt),
      updatedAt: new Date(task.updatedAt),
      tags: [...task.tags]
    };
    
    setEditingTask(taskForEditing);
    
    // Прокрутка к форме с задержкой для гарантии
    setTimeout(() => {
      const formElement = document.getElementById('task-form');
      if (formElement) {
        formElement.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  const handleCancelEdit = () => {
    console.log('Отмена редактирования');
    setEditingTask(null);
  };

  const handleClearAllCompleted = () => {
    if (window.confirm('Вы уверены, что хотите удалить все выполненные задачи?')) {
      setTasks(prevTasks => prevTasks.filter(task => !task.completed));
    }
  };

  // Отладочный вывод
  console.log('Текущая редактируемая задача:', editingTask);
  console.log('ID редактируемой задачи:', editingTask?.id);

  return (
    <S.AppContainer>
      <S.MainContainer>
        <S.Header>
          <S.Title>Умный менеджер задач</S.Title>
          <S.Subtitle>
            Интеллектуальная система управления задачами с умными подсказками, 
            расширенной фильтрацией и аналитикой продуктивности.
          </S.Subtitle>
          
          <S.TechStack>
            <S.TechBadge>React 18</S.TechBadge>
            <S.TechBadge>TypeScript</S.TechBadge>
            <S.TechBadge>Styled Components</S.TechBadge>
            <S.TechBadge>Vite</S.TechBadge>
            <S.TechBadge>Local Storage</S.TechBadge>
          </S.TechStack>
        </S.Header>

        <S.ContentLayout>
          <S.MainContent>
            <S.Section id="task-form">
              <AddTaskForm
                key={editingTask ? `edit-${editingTask.id}` : 'add-new'} // Ключ для принудительного ререндера
                onAddTask={handleAddTask}
                editingTask={editingTask}
                onCancelEdit={handleCancelEdit}
              />
            </S.Section>

            <S.Section>
              <TaskFiltersComponent
                filters={filters}
                onFiltersChange={setFilters}
                sortBy={sortBy}
                onSortChange={setSortBy}
              />
            </S.Section>

            <S.Section>
              <TaskList
                tasks={sortedTasks}
                onToggleComplete={handleToggleComplete}
                onDelete={handleDeleteTask}
                onEdit={handleEditTask}
                title="Ваши задачи"
                emptyStateType={tasks.length === 0 ? 'all' : 'filtered'}
              />
            </S.Section>
          </S.MainContent>

          <S.Sidebar>
            <S.Section>
              <TaskStats tasks={tasks} stats={stats} />
            </S.Section>

            <S.Section>
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Быстрые действия</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <button
                  onClick={handleClearAllCompleted}
                  style={{
                    padding: '0.75rem 1rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  🗑️ Удалить все выполненные
                </button>
                
                <button
                  onClick={() => {
                    const sampleTask: Task = {
                      id: uuidv4(),
                      title: 'Пример задачи',
                      description: 'Это пример задачи для начала работы',
                      completed: false,
                      priority: 'средний',
                      status: 'ожидает',
                      category: 'работа',
                      createdAt: new Date(),
                      updatedAt: new Date(),
                      tags: ['пример', 'демо']
                    };
                    handleAddTask(sampleTask);
                  }}
                  style={{
                    padding: '0.75rem 1rem',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  🎯 Добавить пример
                </button>
              </div>
            </S.Section>

            <S.Section>
              <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Особенности проекта</h3>
              <ul style={{ 
                margin: 0, 
                paddingLeft: '1.25rem',
                fontSize: '0.875rem',
                lineHeight: '1.6',
                color: '#555'
              }}>
                <li> Умные подсказки</li>
                <li> Расширенная фильтрация</li>
                <li> Приоритетная категоризация</li>
                <li> Сохранение в Local Storage</li>
                <li> Адаптивный дизайн</li>
                <li> Аналитика продуктивности</li>
                <li> Поддержка горячих клавиш</li>
                <li> Система управления тегами</li>
              </ul>
            </S.Section>
          </S.Sidebar>
        </S.ContentLayout>

        <S.Footer>
          <S.FooterText>
            <strong>Умный менеджер задач</strong> — Портфолио проект демонстрирующий современную разработку на React.
          </S.FooterText>
          <S.FooterText>
            Технологии: TypeScript • Styled Components • Кастомные хуки
          </S.FooterText>
          <S.FooterText style={{ fontSize: '0.75rem', opacity: 0.7 }}>
            Данные сохраняются в Local Storage.
          </S.FooterText>
        </S.Footer>
      </S.MainContainer>
    </S.AppContainer>
  );
};

export default App;