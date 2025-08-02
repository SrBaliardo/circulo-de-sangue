import { Container, CustomCarousel, Content } from './styles';
import slide1 from '../../assets/images/img1.jpg';
import slide2 from '../../assets/images/img2.jpg';
import slide3 from '../../assets/images/img3.jpg';
import slide4 from '../../assets/images/img4.jpg';

export function Carousel() {
  return (
    <Container>
      <CustomCarousel autoplay autoplaySpeed={3500}>
        <Content>
          <div>
            <h2></h2>
            <img src={slide1} alt="" />
            <p></p>
          </div>
        </Content>
        <Content>
          <div>
            <h2></h2>
            <img src={slide2} alt="" />
            <p></p>
          </div>
        </Content>
        <Content>
          <div>
            <h2></h2>
            <img src={slide3} alt="" />
            <p></p>
          </div>
        </Content>
        <Content>
          <div>
            <h2></h2>
            <img src={slide4} alt="" />
            <p></p>
          </div>
        </Content>
      </CustomCarousel>
    </Container>
  );
}
