import logo from "./github.png";

function Footer() {
  return (
    <div className="footer">
      <p>Hacker News Clone by Sarah Ließ</p>
      <a href="https://github.com/sarahliess">
        <img className="github-logo" alt="github-link" src={logo} />
      </a>
      <p></p>
    </div>
  );
}

export default Footer;
