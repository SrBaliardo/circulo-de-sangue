import { useState, useEffect } from 'react';
import * as S from './styles';
import { Menu, MenuHamburgerHeader } from '../../components';
import logo from '../../assets/images/circuloDeSangue.jpg';

export function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 465);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 465);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const menuOptions = [
    { label: 'O Círculo', id: 'about-section' },
    { label: 'Artes', id: 'art-section' },
    { label: 'Testes', id: 'tests-section' },
    { label: 'Vantagens/Desvantagens', id: 'meritsFlaws-section' },
  ];

  return (
    <S.Container>
      <S.Logo src={logo} alt="rolling-dices" />
      {isMobile ? (
        <label>
          {' '}
          Menu
          <MenuHamburgerHeader options={menuOptions} />
        </label>
      ) : (
        <Menu />
      )}
    </S.Container>
  );
}
