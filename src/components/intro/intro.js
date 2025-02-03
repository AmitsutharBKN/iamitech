import { Container } from 'react-bootstrap';
import '../intro/intro.css';

function Intro() {
  return (
    <div className='section-box'>
      <Container>
        <div className='pageTitle'>
          <h2 className='text-white'>ABOUT ME</h2>
        </div>
        <div className='homeIntro-text'>              
          <p><strong>Hi, I'm Amit Suthar - A Passionate Front-end Developer!</strong></p>
          <p>I'm a Front-end Developer from India with 7+ years of experience in crafting visually stunning, user-friendly, and high-performing web experiences. I specialize in creating responsive, interactive, and modern websites that leave a lasting impression.</p><br/>
          <p><strong>💻 My Expertise:</strong></p>
          <p>🔹 Frontend Technologies: HTML5, CSS3, SCSS, JavaScript, jQuery<br/>
          🔹 Frameworks & Libraries: Bootstrap, Tailwind CSS, React.js<br/>
          🔹 UI/UX & Design: Adobe XD, Photoshop, Figma – turning ideas into pixel-perfect designs<br/>
          🔹 SEO & CMS: Basic SEO strategies and WordPress Elementor for dynamic website creation<br/>
          🔹 Version Control: Git / GitHub</p>
          <br/>
          <p><strong>🚀 What I Do:</strong></p>
          <p>✔️ Transform ideas into beautiful, functional, and efficient web experiences<br/>
          ✔️ Develop fully responsive and cross-browser compatible websites<br/>
          ✔️ Optimize performance and enhance user engagement<br/>
          ✔️ Work with modern design tools to create sleek and interactive UI/UX<br/>
          ✔️ Ensure SEO best practices for better online visibility</p><br/>
          <p><strong>🌎 Why Work With Me?</strong></p>
          <p>I believe that every project is a new adventure, and I love collaborating with amazing people from around the world to create impactful web solutions. I’m always eager to explore new technologies and take on exciting challenges that push my skills further. <br/> If you're looking for a dedicated and detail-oriented front-end developer to bring your vision to life, let’s connect and create something incredible! 🚀</p>
        </div>
      </Container>
    </div>
  );
}

export default Intro;