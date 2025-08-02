import { useState, useMemo } from 'react';
import * as S from './styles';
import { meritsFlaws } from './listMeritsFlaws';
import { SearchOutlined } from '@ant-design/icons';

export function ListMeritsFlaws() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  const filteredMeritsFlaws = useMemo(() => {
    let filteredData = [];

    if (filterType === 'all') {
      meritsFlaws.forEach((category) => {
        if (category.merits) {
          filteredData = filteredData.concat(
            category.merits.map((m) => ({
              ...m,
              type: 'merit',
              subcategory: category.subcategory,
            })),
          );
        }
        if (category.flaws) {
          filteredData = filteredData.concat(
            category.flaws.map((f) => ({
              ...f,
              type: 'flaw',
              subcategory: category.subcategory,
            })),
          );
        }
      });
    } else if (filterType === 'merits') {
      meritsFlaws.forEach((category) => {
        if (category.merits) {
          filteredData = filteredData.concat(
            category.merits.map((m) => ({
              ...m,
              type: 'merit',
              subcategory: category.subcategory,
            })),
          );
        }
      });
    } else if (filterType === 'flaws') {
      meritsFlaws.forEach((category) => {
        if (category.flaws) {
          filteredData = filteredData.concat(
            category.flaws.map((f) => ({
              ...f,
              type: 'flaw',
              subcategory: category.subcategory,
            })),
          );
        }
      });
    }

    if (searchTerm.length < 3) {
      return filteredData;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return filteredData.filter((item) => {
      return Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowerCaseSearchTerm),
      );
    });
  }, [searchTerm, filterType]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <S.Container>
      <S.ContainerContent>
        <S.InputWrapper>
          <SearchOutlined
            style={{
              position: 'absolute',
              left: 10,
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#999',
            }}
          />
          <S.SearchInput
            type="text"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </S.InputWrapper>

        <S.RadiosWrapper>
          <label>
            <input
              type="radio"
              name="filter"
              value="all"
              checked={filterType === 'all'}
              onChange={handleFilterChange}
            />
            &nbsp; Todos
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="merits"
              checked={filterType === 'merits'}
              onChange={handleFilterChange}
            />
            &nbsp; Vantagens
          </label>
          <label>
            <input
              type="radio"
              name="filter"
              value="flaws"
              checked={filterType === 'flaws'}
              onChange={handleFilterChange}
            />
            &nbsp; Desvantagens
          </label>
        </S.RadiosWrapper>

        <S.ContainerCards>
          {filteredMeritsFlaws.map((item, index) => {
            return (
              <S.RowCard key={index}>
                <S.Card>
                  <S.Title>
                    {item.type === 'merit' ? item.merit : item.flaw}
                  </S.Title>
                  <S.Text>
                    <strong>Subcategoria:</strong> {item.subcategory}
                  </S.Text>
                  {item.point_value && (
                    <S.Text>
                      <strong>Valor do Ponto:</strong> {item.point_value}
                    </S.Text>
                  )}
                  {item.description && (
                    <S.Text>
                      <i>
                        <strong>Detalhes:</strong> {item.description}
                      </i>
                    </S.Text>
                  )}
                </S.Card>
              </S.RowCard>
            );
          })}
        </S.ContainerCards>
      </S.ContainerContent>
    </S.Container>
  );
}
