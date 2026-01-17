import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskFilters } from './types/task.types';
import { filterTasks, calculateStats, sortTasks } from './utils/taskHelpers';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDebounce } from './hooks/useDebounce';
import { useTheme } from './contexts/ThemeContext';
import { usePWAUpdate } from './hooks/usePWAUpdate';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskFiltersComponent from './components/TaskFilters/TaskFilters';
import TaskStats from './components/TaskStats/TaskStats';
import * as S from './App.styles';
import { FaSun, FaMoon, FaRocket } from 'react-icons/fa';

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
  
  const { theme, toggleTheme, isDark } = useTheme();
  const { updateAvailable, updateApp } = usePWAUpdate();
  
  const debouncedSearch = useDebounce(filters.search, 300);
  const effectiveFilters = { ...filters, search: debouncedSearch };
  
  const filteredTasks = filterTasks(tasks, effectiveFilters);
  const sortedTasks = sortTasks(filteredTasks, sortBy);
  const stats = calculateStats(tasks);

  useEffect(() => {
    const pendingTasks = tasks.filter(t => !t.completed).length;
    document.title = `Умный менеджер задач ${pendingTasks > 0 ? `(${pendingTasks})` : ''}`;
    
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', isDark ? '#121212' : '#667eea');
    }
  }, [tasks, isDark]);

  const handleAddTask = (task: Task) => {
    if (editingTask) {
      setTasks(prevTasks => 
        prevTasks.map(t => t.id === task.id ? task : t)
      );
      setEditingTask(null);
    } else {
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

  const handleExportTasks = () => {
    const dataStr = JSON.stringify(tasks, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `tasks-backup-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleImportTasks = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const importedTasks = JSON.parse(event.target?.result as string);
            if (Array.isArray(importedTasks)) {
              if (window.confirm(`Импортировать ${importedTasks.length} задач? Существующие задачи будут сохранены.`)) {
                setTasks(prev => [...importedTasks, ...prev]);
              }
            } else {
              alert('Неверный формат файла');
            }
          } catch (error) {
            alert('Ошибка при чтении файла');
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  // Отладочный вывод
  console.log('Текущая тема:', theme);
  console.log('Текущая редактируемая задача:', editingTask);

  return (
    <S.AppContainer className={isDark ? 'dark-theme' : 'light-theme'}>
      <S.MainContainer>
        <S.Header>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: '1rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <S.Title>Умный менеджер задач</S.Title>
              {updateAvailable && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginTop: '0.5rem',
                  padding: '0.25rem 0.75rem',
                  background: 'linear-gradient(135deg, #FF9800 0%, #FF5722 100%)',
                  color: 'white',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  width: 'fit-content',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                onClick={updateApp}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                >
                  <FaRocket />
                  <span>Доступно обновление!</span>
                </div>
              )}
            </div>
            
           <button
  onClick={toggleTheme}
  style={{
    background: isDark 
      ? 'linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%)' 
      : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: isDark ? '#b0b0d0' : 'white',
    border: 'none',
    borderRadius: '50%',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxShadow: isDark 
      ? '0 4px 12px rgba(42, 45, 62, 0.3)' 
      : '0 4px 12px rgba(102, 126, 234, 0.3)',
    transition: 'all 0.3s ease',
    flexShrink: 0
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
  }}
  title={isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
  aria-label={isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'}
>
  {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
</button>
          </div>
          
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
            <S.TechBadge onClick={toggleTheme} style={{ cursor: 'pointer' }}>
              {isDark ? '🌙 Тёмная тема' : '☀️ Светлая тема'}
            </S.TechBadge>
          </S.TechStack>
          
          <S.GradientLine />
        </S.Header>

        <S.ContentLayout>
          <S.MainContent>
            <S.Section id="task-form">
              <AddTaskForm
                key={editingTask ? `edit-${editingTask.id}` : 'add-new'}
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
  <h3 style={{ 
    marginTop: 0, 
    marginBottom: '1rem',
    color: isDark ? '#e0e0e0' : '#333'
  }}>
    Быстрые действия
  </h3>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
    <button
      onClick={handleClearAllCompleted}
      style={{
        padding: '0.75rem 1rem',
        border: 'none',
        borderRadius: '8px',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        background: isDark 
          ? 'linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%)' 
          : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        if (isDark) {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(42, 45, 62, 0.4)';
        } else {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)';
        }
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
        border: 'none',
        borderRadius: '8px',
        fontSize: '0.875rem',
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        background: isDark 
          ? 'linear-gradient(135deg, #2a2d3e 0%, #3a2d4e 100%)' 
          : 'linear-gradient(135deg, rgb(102, 126, 234) 0%, rgb(118, 75, 162) 100%)',
        color: 'white'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        if (isDark) {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(42, 45, 62, 0.4)';
        } else {
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(76, 175, 80, 0.4)';
        }
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      🎯 Добавить пример задачи
    </button>
  </div>
</S.Section>

            <S.Section>
              <h3 style={{ 
                marginTop: 0, 
                marginBottom: '1rem',
                color: isDark ? '#e0e0e0' : '#333'
              }}>
                Особенности проекта
              </h3>
              <ul style={{ 
                margin: 0, 
                paddingLeft: '1.25rem',
                fontSize: '0.875rem',
                lineHeight: '1.6'
              }}>
                <li style={{ 
                  marginBottom: '0.5rem',
                  color: isDark ? '#ccc' : '#555'
                }}> Умные подсказки</li>
                <li style={{ 
                  marginBottom: '0.5rem',
                  color: isDark ? '#ccc' : '#555'
                }}>Расширенная фильтрация</li>
                <li style={{ 
                  marginBottom: '0.5rem',
                  color: isDark ? '#ccc' : '#555'
                }}> Приоритетная категоризация</li>
                <li style={{ 
                  marginBottom: '0.5rem',
                  color: isDark ? '#ccc' : '#555'
                }}> Сохранение в Local Storage</li>
                <li style={{ 
                  marginBottom: '0.5rem',
                  color: isDark ? '#ccc' : '#555'
                }}> Адаптивный дизайн</li>
                <li style={{ 
                  marginBottom: '0.5rem',
                  color: isDark ? '#ccc' : '#555'
                }}>Аналитика продуктивности</li>
                <li style={{ 
                  marginBottom: '0.5rem',
                  color: isDark ? '#ccc' : '#555'
                }}> {isDark ? ' Темная тема' : ' Светлая тема'}</li>
                <li style={{ 
                  color: isDark ? '#ccc' : '#555'
                }}>Система управления тегами</li>
              </ul>
            </S.Section>

          </S.Sidebar>
        </S.ContentLayout>

        <S.Footer>
          <S.FooterText>
            <strong>Умный менеджер задач</strong> — Портфолио проект демонстрирующий современную разработку на React.
          </S.FooterText>
          <S.FooterText>
            Технологии: TypeScript • Styled Components • Кастомные хуки • PWA • Светлая/темная тема
          </S.FooterText>
          <S.FooterText style={{ fontSize: '0.75rem', opacity: 0.7 }}>
            Данные сохраняются в Local Storage. Приложение работает оффлайн.
          </S.FooterText>
        </S.Footer>
      </S.MainContainer>

      {/* Уведомление об обновлении для PWA */}
      {updateAvailable && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '1rem',
          borderRadius: '12px',
          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
          zIndex: 1000,
          maxWidth: '300px',
          animation: 'slideIn 0.3s ease',
          border: isDark ? '1px solid rgba(255,255,255,0.1)' : 'none'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem',
            marginBottom: '0.5rem', 
            fontWeight: '600',
            fontSize: '0.875rem'
          }}>
            <FaRocket style={{ animation: 'pulse 2s infinite' }} />
            <span>Доступно обновление!</span>
          </div>
          <div style={{ 
            fontSize: '0.75rem', 
            marginBottom: '1rem',
            opacity: 0.9 
          }}>
            Новая версия приложения. Обновите для получения последних функций и исправлений.
          </div>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button
              onClick={updateApp}
              style={{
                padding: '0.5rem 1rem',
                background: 'white',
                color: '#667eea',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer',
                flex: 1,
                fontSize: '0.75rem',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Обновить сейчас
            </button>
            <button
              onClick={() => {/* Можно добавить логику скрытия */}}
              style={{
                padding: '0.5rem 1rem',
                background: 'rgba(255,255,255,0.1)',
                color: 'white',
                border: '1px solid rgba(255,255,255,0.3)',
                borderRadius: '8px',
                cursor: 'pointer',
                flex: 1,
                fontSize: '0.75rem',
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Напомнить позже
            </button>
          </div>
          <style>{`
            @keyframes slideIn {
              from { transform: translateX(100%); opacity: 0; }
              to { transform: translateX(0); opacity: 1; }
            }
            @keyframes pulse {
              0% { transform: scale(1); }
              50% { transform: scale(1.1); }
              100% { transform: scale(1); }
            }
          `}</style>
        </div>
      )}
    </S.AppContainer>
  );
};

export default App;