import "./styles/body-login.css";
export function Body() {
  return (
    <div className="registration-page">
      <div className="registration-form">
        <h1>Регистрация аккаунта</h1>
        <form>
          <div className="form-group">
            <label className="pole" htmlFor="firstName">
              Имя
            </label>
            <input
              className="enter"
              type="text"
              id="firstName"
              name="firstName"
            />
          </div>
          <div className="form-group">
            <label className="pole" htmlFor="lastName">
              Фамилия
            </label>
            <input
              className="enter"
              type="text"
              id="lastName"
              name="lastName"
            />
          </div>
          <div className="form-group">
            <label className="pole" htmlFor="patronymic">
              Отчество
            </label>
            <input
              className="enter"
              type="text"
              id="patronymic"
              name="patronymic"
            />
          </div>
          <div className="form-group">
            <label className="pole" htmlFor="phone">
              Телефон
            </label>
            <input className="enter" type="text" id="phone" name="phone" />
          </div>
          <div className="form-group">
            <label className="pole" htmlFor="email">
              Почта
            </label>
            <input className="enter" type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label className="pole" htmlFor="password">
              Пароль
            </label>
            <input
              className="enter"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <button className="registr" type="submit">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}
export default Body;
