import styled from 'styled-components';
import bloodDrop from '../../assets/images/bloodDrop.ico';
import bgVampire from '../../assets/images/bg.webp';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #0c0c0c;
  background: url(${bgVampire}) center no-repeat;
  background-size: cover;
  overflow-x: hidden;

  section {
    width: 85%;
    height: 100vh !important;
    padding: 50px 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    opacity: 0;
    transform: translateY(50px);
    transition:
      opacity 0.8s ease-out,
      transform 0.8s ease-out;
  }

  section.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 1024px) {
    section {
      width: 100%;
      padding: 30px 100px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 30px 70px;
    }
  }

  @media (max-width: 425px) {
    section {
      padding: 20px;
      align-items: center;
      height: 500px !important;
    }
  }
`;

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    padding-bottom: 30px;
  }

  @media (max-width: 425px) {
    justify-content: center;
  }
`;

export const BloodIcon = styled.img.attrs({ src: bloodDrop })`
  width: 50px !important;

  @media (max-width: 768px) {
    width: 45px;
  }

  @media (max-width: 425px) {
    width: 40px;
  }
`;

export const Title = styled.h2`
  color: #cd143c;
  font-size: 2rem;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 425px) {
    font-size: 1.7rem;
  }
`;

export const Text = styled.p`
  color: #fff;

  @media (max-width: 425px) {
    font-size: 0.85rem;
  }
`;

export const FaceSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FaceImage = styled.img`
  width: 100%;
`;

export const VMImage = styled.img`
  width: 40%;
`;

export const AboutSection = styled.section`
  height: 800px !important;

  .sect {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 70px;
  }

  img {
    width: 400px;
  }

  div {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 1444px) {
    img {
      width: 300px;
    }
  }

  @media (max-width: 1024px) {
    img {
      width: 230px;
    }
  }

  @media (max-width: 768px) {
    .sect {
      gap: 30px;
    }

    img {
      width: 200px;
    }
  }

  @media (max-width: 425px) {
    .sect {
      gap: 15px;
    }

    img {
      width: 90px;
    }

    div {
      gap: 10px;
    }
  }
`;

export const ArtSection = styled.section`
  height: 100% !important;
  margin-top: 50px !important;
  margin-bottom: 50px !important;

  @media (max-width: 425px) {
    p {
      text-align: center;
    }
  }
`;

export const TestsSection = styled.div`
  height: 100% !important;

  section {
    padding: 20px !important;
    height: 100% !important;
    justify-content: flex-start !important;
    margin-bottom: 50px !important;
  }

  @media (max-width: 430px) {
    section {
      margin-bottom: 80px !important;
    }
  }
`;
