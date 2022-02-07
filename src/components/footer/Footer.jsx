import "./footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        <span>© Copyright 2022</span>
        <span className="copy-divider">|</span>
        <span>Kartikey Singh</span>
      </div>
      <div className="social-icons">
        <div className="button" onClick={()=>{window.location.href = "https://github.com/noiceee"}}>
          <i className="fa-brands fa-github"></i>
          <div className="fill"></div>
        </div>
        <div className="button" onClick={()=>{window.location.href = "https://linkedin.com/in/kartikey69"}}>
          <i className="fa-brands fa-linkedin-in"></i>
          <div className="fill"></div>
        </div>
        <div className="button" onClick={()=>{window.location.href = "https://open.spotify.com/user/31a5rsnjdezlamabfbzdjprwfsfi?si=73d5624a77bc4df7"}}>
          <i className="fa-brands fa-spotify"></i>
          <div className="fill"></div>
        </div>
        <div className="button" onClick={()=>{window.location.href = "mailto:kartikey2k3@gmail.com"}}>
          <i className="fas fa-envelope"></i>
          <div className="fill"></div>
        </div>
        <div className="button" onClick={()=>{window.location.href = "https://www.codechef.com/users/noicee"}}>
          <i className="fas fa-code"></i>
          <div className="fill"></div>
        </div>
      </div>
    </footer>
  );
}
