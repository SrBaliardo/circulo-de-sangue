import styled, { css, keyframes } from 'styled-components';
import DarkAnkh from '../../assets/images/dark-ankh.png';

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const rotateX = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

export const MenuContainer = styled.div`
  position: fixed;
  right: 5vw;
  bottom: 11vh;
  z-index: 1111;

  @media (max-width: 1024px) {
    right: 7vw;
  }

  @media (max-width: 768px) {
    right: 8vw;
  }

  @media (max-width: 425px) {
    right: 12vw;
    transform: scale(0.8);
  }
`;

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 40px;
  height: 50px;
  position: absolute;

  div {
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 7px;
    margin: 4px 0;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? 'rotate(45deg) translate(8px, 8px)' : 'rotate(0)'};
      background-color: ${({ $isOpen }) => ($isOpen ? ' #cd143c' : ' #fff')};
    }
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'rotate(0)'};
      background-color: ${({ $isOpen }) => ($isOpen ? ' #cd143c' : ' #fff')};
    }
  }
`;

export const MenuList = styled.ul`
  position: absolute;
  bottom: -30px;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 200px;
`;

export const MenuItem = styled.li`
  position: relative;
  width: 220px;
  height: 40px;
  background-color: rgba(12, 12, 12, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.8rem;
  color: #fff;
  font-weight: 500;
  transform: scale(0.8);
  transition: all 0.3s ease;
  z-index: 3;

  ${({ $isOpen, $delay }) =>
    $isOpen &&
    css`
      animation: ${fadeIn} 0.3s ease-out ${$delay}s forwards;
    `}

  &:hover {
    color: #000;
    background: #fff;
    background-color: rgba(255, 255, 255, 0.5);
  }

  &::after {
    content: '';
    display: none;
    position: absolute;
    left: 0px;
    width: 25px;
    height: 25px;
    background-image: url(${DarkAnkh});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
  }

  &:hover::after {
    display: block;
    opacity: 1;
    transform: scale(1);
    animation: ${rotateX} 2.5s linear infinite;
  }

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
`;
