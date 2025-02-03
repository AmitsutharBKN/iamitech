import { Container } from 'react-bootstrap';
import '../footer/footer.css';

function Footer() {
  return (
    <div className='footerWrp'>
      <Container>
      <div class="copyright">Copyright &copy; <script type="text/javascript">document.write(new Date().getFullYear());</script> Amit Suthar. All rights reserved.</div>
      </Container>
    </div>
  );
}

export default Footer;