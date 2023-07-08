import "../App.css";
const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>
          your feet <br /> deserve <br /> the best
        </h1>

        <p>
          We are here to provide you with our exceptional
          <br /> footwear because your feet deserve <br /> nothing less than the
          very best.
        </p>
        <div className="hero-button">
          <button className="btn-one">Shop Now</button>
          <button className="btn-two">Category</button>
        </div>
        <div className="links">
          <p>Also Available on</p>
          <img src="/images/Daraz_Logo.png" alt="daraz-logo" />
          <img src="/images/logo.png" alt="gold-star-logo" />
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
