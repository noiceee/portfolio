import "./hero.scss";
import profilePic from './profile-black.jpg';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-description">
        <h1>
          I am Kartikey, a <br /><span>Web Developer.</span>
        </h1>
      </div>
      <div className="img-container">
        <img src={profilePic} alt="kartikey singh" />
      </div>
    </div>
  );
}
