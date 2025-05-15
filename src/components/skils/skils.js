import { Container } from 'react-bootstrap';
import '../skils/skils.css';

function Skils() {
  return (
    <div className='skils-box'>
      <Container>
        <div className='pageTitle'>
          <h2 className='text-white'>professional skills</h2>
          <p>Crafting intuitive digital experiences with precision and creativity</p>
        </div>

        <ul className='skills-listing'>
          <li><div className='skilName-box'>HTML5</div></li>
          <li><div className='skilName-box'>CSS3</div></li>
          <li><div className='skilName-box'>SCSS</div></li>
          <li><div className='skilName-box'>JavaScript</div></li>
          <li><div className='skilName-box'>JQuery</div></li>
          <li><div className='skilName-box'>Bootstrap</div></li>
          <li><div className='skilName-box'>Tailwind</div></li>
          <li><div className='skilName-box'>React Js</div></li>
          <li><div className='skilName-box'>Addobe XD</div></li>
          <li><div className='skilName-box'>Photoshop</div></li>
          <li><div className='skilName-box'>Figma</div></li>
          <li><div className='skilName-box'>Basic SEO</div></li>
          <li><div className='skilName-box'>Wordpress Elementor</div></li>
          <li><div className='skilName-box'>Git/GitHub</div></li>
        </ul>        
      </Container>
    </div>
  );
}

export default Skils;