import styled from 'styled-components';

export const Container = styled.div`
  .menu-link {
    font-size: 1.1rem;
  }
`;

export const MenuItens = styled.div`
  width: 100%;
  display: flex;
  gap: 35px;
`;

export const MenuLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  color: ${({ $isContact }) => ($isContact ? '#cd143c' : '#fff')};
  border: ${({ $isContact }) => ($isContact ? '2px solid #cd143c' : 'none')};
  border-radius: 5px;
  padding: ${({ $isContact }) => ($isContact ? '5px' : '0')};
  transition: all 0.2s ease;

  &:hover {
    color: #cd143c;
  }
  &:active {
    transform: scale(0.95);
  }
`;
