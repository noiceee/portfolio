import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        <span>© Copyright {new Date().getFullYear()}</span>
        <span className="copy-divider">|</span>
        <span>Kartikey Singh</span>
      </div>
      <div className="social-icons">
        <div className="button" onClick={()=>{window.location.href = "https://github.com/noiceee"}}>
          <i className="fa-brands fa-github"></i>
          <div className="fill"></div>
        </div>
        <div className="button" onClick={()=>{window.location.href = "https://linkedin.com/in/kartikeyyy"}}>
          <i className="fa-brands fa-linkedin-in"></i>
          <div className="fill"></div>
        </div>
        <div className="button" onClick={()=>{window.location.href = "mailto:kartikey2k3@gmail.com"}}>
          <i className="fas fa-envelope"></i>
          <div className="fill"></div>
        </div>
        <div className="button" onClick={()=>{window.location.href = "https://www.leetcode.com/u/noiceee"}}>
          <i className="fas fa-code"></i>
          <div className="fill"></div>
        </div>
      </div>
    </footer>
  );
}
