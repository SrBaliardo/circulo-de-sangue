import * as S from './styles';
import {
  Header,
  Carousel,
  Footer,
  MenuHamburgerBody,
  FollowCursor,
  ListTests,
} from '../../components';
import { useInView } from '../../utils/useInView';
import faceImg from '../../assets/images/escudoMestre.png';
import VMImg from '../../assets/images/v5capa-noBG.png';
import aboutImg from '../../assets/images/circuloDeSangue.jpg';

export function Home() {
  const [aboutRef, aboutVisible] = useInView();
  const [artRef, artVisible] = useInView();
  const [testsRef, testsVisible] = useInView();

  const menuOptions = [
    { label: 'Voltar ao topo', id: 'top' },
    { label: 'O Círculo', id: 'about-section' },
    { label: 'Artes', id: 'art-section' },
    { label: 'Testes', id: 'tests-section' },
  ];

  return (
    <S.Container>
      <Header />
      <S.ContainerContent id="top">
        <S.FaceSection>
          <S.FaceImage src={faceImg} alt="shield" />
          <S.VMImage src={VMImg} alt="shield" />
        </S.FaceSection>

        <MenuHamburgerBody options={menuOptions} />

        <FollowCursor
          offsetX={20}
          cardWidth="200px"
          rotationFactor={40}
          enableTilt={true}
          animationConfig={{ mass: 5, tension: 350, friction: 40 }}
          wheelConfig={{ mass: 1, tension: 200, friction: 30 }}
        ></FollowCursor>

        <S.AboutSection
          id="about-section"
          ref={aboutRef}
          className={aboutVisible ? 'visible' : ''}
        >
          <div className="sect">
            <img src={aboutImg} alt="hivetron-technology" />
            <div>
              <S.Text>
                Somos um grupo de amigos que se jutam ára se distrair e adentrar
                o mundo do role-play.
              </S.Text>
              <S.Text>
                Nosso objetivo é simplificar a complexidade do dia a dia com uma
                pitada de possibilidades impossíveis ou improváveis. <br />
              </S.Text>
              <S.Text>
                Dizem que é somente um jogo de interpretação, mas o Círculo de
                Sangue é mais do isso, é uma saída...
              </S.Text>
            </div>
          </div>
        </S.AboutSection>

        <S.ArtSection
          id="art-section"
          ref={artRef}
          className={artVisible ? 'visible' : ''}
        >
          <Carousel />
        </S.ArtSection>

        <S.TestsSection id="tests-section">
          <section ref={testsRef} className={testsVisible ? 'visible' : ''}>
            <S.HeaderSection>
              <S.BloodIcon />
              <S.Title>Lista de Ações</S.Title>
            </S.HeaderSection>
            <ListTests />
          </section>
        </S.TestsSection>
      </S.ContainerContent>
      <Footer />
    </S.Container>
  );
}
