import { Container, Row } from 'react-bootstrap';
import '../footer/footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='top-footer'>
        <Container>
          <Row className='justify-content-between align-items-center'>
            <div className='col-lg-auto'>
              <div class="footer-head">Contact us</div>
              <ul class="footerCompany-info">
                <li>
                    <div class="footIcon-box"><img src={require('../../assets/images/contact-icon1.png')} alt="Amit Suthar"/></div> 
                    Old Ginnani, Near Pugal house, <br/> Bikaner (Raj.), <br/> India 
                </li>
                <li>
                    <div class="footIcon-box"><img src={require('../../assets/images/contact-icon2.png')} alt="Amit Suthar"/></div> 
                    <a href="tel:+919001101762">+91 9001101762</a> <br/>
                    <a href="tel:+919057532312">+91 9057532312</a>
                </li>
                <li>
                    <div class="footIcon-box"><img src={require('../../assets/images/contact-icon3.png')} alt="Amit Suthar"/></div> 
                    <a href="mailto:amitsuthar101@gmail.com">amitsuthar101@gmail.com</a>
                </li>
            </ul>
            </div>
            <div className='col'>
              <div className='map-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d880.4638820067948!2d73.31741502380899!3d28.028891158878555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1747416439464!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className='footerWrp'>
        <Container>
          <div class="copyright">Copyright &copy; <script type="text/javascript">document.write(new Date().getFullYear());</script> Amit Suthar. All rights reserved.</div>
        </Container>
      </div>
    </div>
  );
}

export default Footer;