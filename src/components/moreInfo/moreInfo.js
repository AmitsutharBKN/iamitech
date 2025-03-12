import { Container, Row } from 'react-bootstrap';
import '../moreInfo/moreInfo.css';

function Moreinfo() {
  return (
    <div className='homeBlock-section'>
        <Container>
          <Row className='justify-content-center grid-10 gutters-10'>
            <div className='col-md-3 col-sm-6'>
              <div className='home_banenrInfo-box pageClass'>
                <h2>8+</h2>
                <p>Year <br/> experience</p>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='home_banenrInfo-box pageClass'>
                <h2>24/7</h2>
                <p>support available to assist you</p>
              </div>
            </div> 
            <div className='col-md-3 col-sm-6'>
              <div className='home_banenrInfo-box pageClass'>
                <h2>50+</h2>
                <p>Trusted, satisfied customer</p>
              </div>
            </div>
            <div className='col-md-3 col-sm-6'>
              <div className='home_banenrInfo-box pageClass'>
                <h2>200+</h2>
                <p>successful projects delivered</p>
              </div>
            </div>
          </Row>
        </Container>
    </div>
  );
}

export default Moreinfo;