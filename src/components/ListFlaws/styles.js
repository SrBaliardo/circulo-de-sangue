import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const ContainerContent = styled.div`
  width: 100%;
  height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow-y: auto;
  position: relative !important;
  margin-top: 100px;
`;

export const ContainerCards = styled.div`
  display: grid !important;
  grid-template-columns: repeat(2, minmax(400px, 1fr));
  gap: 20px;

  @media (max-width: 870px) {
    grid-template-columns: minmax(auto, 1fr);
  }
`;

export const RowCard = styled.div`
  border: 1px solid #cd143c;
  border-radius: 10px;
  padding: 10px;
  background-color: rgba(12, 12, 12, 0.5);
`;

export const Card = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.7rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const InputWrapper = styled.div`
  position: fixed;
  top: 130px;
  left: 20px;
  width: 100%;
  max-width: 375px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px 12px 32px;
  border: 1px solid #cd143c;
  border-radius: 8px;
  background-color: #222;
  color: #eee;
  font-size: 1rem;
  box-shadow: 0 0 10px rgba(205, 20, 60, 0.5);
  transition: all 0.3s ease;

  &:focus {
    border-color: #ff004c;
    box-shadow: 0 0 15px rgba(255, 0, 76, 0.8);
  }

  &::placeholder {
    color: #aaa;
  }
`;
