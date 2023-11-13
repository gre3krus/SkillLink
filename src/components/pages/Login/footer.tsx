import logo from "./styles/img/logo.png";
import vk from "./styles/img/VK.png";

export function Footer() {
  return (
    <footer>
      <div className="down-info">
        <div className="info-footer-left">
          <p className="fq">Контакты</p>
          <p className="fq">flance@gmail.com</p>
          <a href="https://vk.com/itfreelancee">
            <img src={vk} className="vk" alt="vk error" />
          </a>
        </div>
        <div className="logo-footer">
          <img src={logo} className="logo-down" alt="logo error" />
        </div>
        <div className="info-footer-right">
          <p className="fq">Партнеры</p>
          <p className="fq">Политика конфиденциальности</p>
          <p className="fq">Пользовательское соглашение</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
