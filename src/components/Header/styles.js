import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: #0c0c0c;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  label {
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
    font-size: 1.3rem;
  }
`;

export const Texto = styled.a`
  color: #fff;
  font-weight: bold;
`;

export const Logo = styled.img`
  height: 120px;

  /* &:hover {
    animation: spin 0.7s forwards;
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-180deg);
      }
      from {
        transform: rotate(-180deg);
      }
      to {
        transform: rotate(0deg);
      }
    }
  } */
`;
