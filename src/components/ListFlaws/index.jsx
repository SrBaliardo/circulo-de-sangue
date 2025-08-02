import { useState, useMemo } from 'react';
import * as S from './styles';
import { powerData } from './listTests';
import { SearchOutlined } from '@ant-design/icons';

export function ListTests() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPowers = useMemo(() => {
    if (searchTerm.length < 3) {
      return powerData;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    return powerData.filter((power) => {
      return Object.values(power).some((value) =>
        String(value).toLowerCase().includes(lowerCaseSearchTerm),
      );
    });
  }, [searchTerm]);

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

        <S.ContainerCards>
          {filteredPowers.map((test, index) => {
            return (
              <S.RowCard key={index}>
                <S.Card>
                  <S.Title>{test.actionPower}</S.Title>
                  <S.Text>
                    <strong>Disciplina:</strong> {test.skill} -{' '}
                    <strong>Nível:</strong> {test.level}
                  </S.Text>
                  <S.Text>
                    <strong>Teste:</strong> {test.test}
                  </S.Text>
                  <S.Text>
                    <strong>DIF Sugerida:</strong> {test.difSugest}
                  </S.Text>
                  <S.Text>
                    <strong>Custos:</strong> {test.costs} -{' '}
                    <strong>Potência de Sangue:</strong> {test.bloodPotency}
                  </S.Text>
                  <S.Text>
                    <strong>Contra-ataque/Resistência:</strong>{' '}
                    {test.counterResist}
                  </S.Text>
                  <S.Text>
                    <strong>Clãs Principais:</strong> {test.clans}
                  </S.Text>
                  <S.Text>
                    <i>
                      <strong>Detalhes:</strong> {test.description}
                    </i>
                  </S.Text>
                </S.Card>
              </S.RowCard>
            );
          })}
        </S.ContainerCards>
      </S.ContainerContent>
    </S.Container>
  );
}
