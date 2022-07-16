import "./SocialLinks.css";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <div className="icon facebook"></div>
      </a>
      <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer">
        <div className="icon whatsapp"></div>
      </a>
      <a href="https://web.telegram.org/k/" target="_blank" rel="noreferrer">
        <div className="icon telegram"></div>
      </a>
    </div>
  );
};

export default SocialLinks;
