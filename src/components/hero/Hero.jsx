import "./hero.scss";
import profilePic from "./kartimk.png";
import profilePicwebp from "./kartimk.webp";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-description">
        <h1>
          I am Kartikey, a <br />
          <span>Web Developer.</span>
        </h1>
      </div>
      <div className="img-container">
        <div className="img-wrapper">
          <picture>
            <source type="image/webp" srcSet={profilePicwebp}/>
            <source type="image/jpeg" srcSet={profilePic}/>
            <img src={profilePicwebp} alt="kartikey singh" />
          </picture>
        </div>
      </div>
    </div>
  );
}
