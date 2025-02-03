import '../socialMedia/socialMedia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

function Socialmedia() {
  return (
    <ul className='socialMedia-box'>
      <li><h6>Follow Me On</h6></li>
      <li><a href='mailto:amitsuthar101@gmail.com' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a></li>
      <li><a href='https://www.facebook.com/amit.suthar.1232' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a></li>
      <li><a href='https://www.instagram.com/iamitsuthar/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
      <li><a href='https://www.linkedin.com/in/amit-suthar-497238aa/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
    </ul>
  );
}

export default Socialmedia;