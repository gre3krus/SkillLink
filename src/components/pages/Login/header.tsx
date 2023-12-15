import logo from "./styles/img/logo.png";
import "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <a href="/SkillLink">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
      <form className="search-container">
        <input type="search" placeholder="Поиск" className="search" />
      </form>

      <div className="info-container">
        <a id="anim" href="vacansy">
          Вакансии
        </a>
        <a id="anim" href="resume.tsx">
          Резюме
        </a>
        <a id="anim" href="/login">
          Войти
        </a>
      </div>
    </header>
  );
}

export default Header;
