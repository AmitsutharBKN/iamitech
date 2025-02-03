import '../banner/banner.css';

function Banner() {
  return (
    <div className='heroSection'>
      <div className='banner_caption'>
        <h1>
          <span>i</span>
          <span>'</span>
          <span>a</span>
          <span>m</span>
          <span>i</span>
          <span>t</span>
        </h1>
        <div className='bannerTitle-text'>
          <p>WE ARE A CREATIVE STUDIO, SPECIALIZED IN STRATEGY, BRANDING  DESIGN, AND DEVELOPMENT. OUR WORK IS ALWAYS AT THE INTERSECTION  OF DESIGN AND TECHNOLOGY.</p>
        </div>
      </div>

      <div className='downArrow-scroll'><img src={require('../../assets/images/downArrow.png')} alt=''/></div>
    </div>    
  );
}

export default Banner;