import "./styles/footer.css";
import logo from "./styles/img/logo.png";
import vk from "./styles/img/VK.png";

export function Footer() {
  return (
    <footer>
      <div className="down-info">
        <div className="info-footer-left">
          <p>Контакты</p>
          <p>flance@gmail.com</p>
          <a href="https://vk.com/itfreelancee">
            <img src={vk} className="vk" alt="vk error" />
          </a>
        </div>
        <div className="logo-footer">
          <img src={logo} className="logo-down" alt="logo error" />
        </div>
        <div className="info-footer-right">
          <p>Партнеры</p>
          <p>Политика конфиденциальности</p>
          <p>Пользовательское соглашение</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
