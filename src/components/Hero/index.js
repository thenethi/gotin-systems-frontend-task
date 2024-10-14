import "./index.css";

const Hero = () => (
  <div className="hero-container">
    <div className="hero-content-container">
      <h1 className="hero-heading">
        <span className="hero-spanned-heading">Sell CRE Faster</span> with OMs &
        Ads created in <span className="hero-spanned-heading">minutes</span>
      </h1>
      <p className="hero-para">
        Create beautiful Commercial Real Estate Offering Memorandums, Flyers &
        Ads in minutes with our AI powered platform
      </p>
      <div className="hero-lower-section">
        <div className="hero-cta-btn">
          <p>Try For Free</p>
          <img
            src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728901188/arrow-right-sm_t0yvsv.png"
            alt="cta-icon"
            className="cta-icon"
          />
        </div>
        <div className="watch-demo-container">
          <img
            src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728901938/Group_34_qq6zzc.png"
            alt="watch-demo-icon"
            className="watch-demo-icon"
          />
          <p className="watch-demo-text">Watch Demo</p>
        </div>
      </div>
    </div>
    <img
      src="https://res.cloudinary.com/de2lwnsu7/image/upload/v1728902334/Header_menu_options_pz6reo.png"
      alt="hero-image"
      className="hero-image"
    />
  </div>
);

export default Hero;
