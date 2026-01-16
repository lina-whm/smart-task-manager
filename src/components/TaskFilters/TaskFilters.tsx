import React from 'react';
import { TaskFilters as TaskFiltersType } from '../../types/task.types';
import { priorities, categories, statuses } from '../../utils/taskHelpers';
import * as S from './TaskFilters.styles';

interface TaskFiltersProps {
  filters: TaskFiltersType;
  onFiltersChange: (filters: TaskFiltersType) => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const TaskFilters: React.FC<TaskFiltersProps> = ({
  filters,
  onFiltersChange,
  sortBy,
  onSortChange
}) => {
  const handleFilterChange = (key: keyof TaskFiltersType, value: string | boolean) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      status: 'все',
      priority: 'все',
      category: 'все',
      search: '',
      showCompleted: true,
      showOverdue: false
    });
  };

  return (
    <S.FiltersContainer>
      <S.FiltersHeader>
        <S.FiltersTitle>Фильтры и сортировка</S.FiltersTitle>
      </S.FiltersHeader>

      <S.FiltersGrid>
        <S.FilterGroup>
          <S.FilterLabel>Статус</S.FilterLabel>
          <S.Select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <option value="все">Все статусы</option>
            {statuses.map(status => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </S.Select>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.FilterLabel>Приоритет</S.FilterLabel>
          <S.Select
            value={filters.priority}
            onChange={(e) => handleFilterChange('priority', e.target.value)}
          >
            <option value="все">Все приоритеты</option>
            {priorities.map(priority => (
              <option key={priority} value={priority}>
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </option>
            ))}
          </S.Select>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.FilterLabel>Категория</S.FilterLabel>
          <S.Select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <option value="все">Все категории</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </S.Select>
        </S.FilterGroup>

        <S.FilterGroup>
          <S.FilterLabel>Поиск</S.FilterLabel>
          <S.SearchInput
            type="text"
            placeholder="Поиск задач..."
            value={filters.search}
            onChange={(e) => handleFilterChange('search', e.target.value)}
          />
        </S.FilterGroup>
      </S.FiltersGrid>

      <S.FilterActions>
        {/* Верхняя строка: только чекбоксы */}
        <S.FilterTopRow>
          <S.CheckboxesContainer>
            <S.CheckboxLabel>
              <S.Checkbox
                type="checkbox"
                checked={filters.showCompleted}
                onChange={(e) => handleFilterChange('showCompleted', e.target.checked)}
              />
              Показывать выполненные
            </S.CheckboxLabel>

            <S.CheckboxLabel>
              <S.Checkbox
                type="checkbox"
                checked={filters.showOverdue}
                onChange={(e) => handleFilterChange('showOverdue', e.target.checked)}
              />
              Только просроченные
            </S.CheckboxLabel>
          </S.CheckboxesContainer>
        </S.FilterTopRow>

        {/* Нижняя строка: сортировка и кнопка сброса на одном уровне */}
        <S.FilterBottomRow>
          <S.SortAndResetContainer>
            <S.SortSelect
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="default">Сортировка: По умолчанию</option>
              <option value="priority">Сортировка: По приоритету</option>
              <option value="dueDate">Сортировка: По сроку</option>
              <option value="createdAt">Сортировка: По дате создания</option>
            </S.SortSelect>

            <S.ClearButton onClick={clearFilters}>
              Сбросить фильтры
            </S.ClearButton>
          </S.SortAndResetContainer>
        </S.FilterBottomRow>
      </S.FilterActions>
    </S.FiltersContainer>
  );
};

export default TaskFilters;