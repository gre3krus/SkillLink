import "./styles/body.css";
import { ChangeEventHandler, useState } from "react";
import logo from "./styles/img/logo.png";
import arrow from "./styles/img/btnsidebar.png";

enum Category {
  SMM = "SMM",
  DESIGN = "DESIGN",
  MANAGEMENT = "MANAGEMENT",
  PROGRAMMING = "PROGRAMMING",
}

const allCategories = Object.values(Category);

export function Body() {
  // Отображение панели фильтра
  const [showBlockCategories, setBlockCategories] = useState(false);

  const handleCategoriesChange = () => {
    setBlockCategories(!showBlockCategories);
    if (!showBlockCategories) {
      setShowSalary(false);
    }
  };
  // Блок с категориями
  const [categories, setCategories] = useState<Category[]>([]);

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) =>
    setCategories((prevCategories) =>
      target.checked
        ? prevCategories.concat(target.value as Category)
        : prevCategories.filter((category) => category !== target.value)
    );

  // Отображение salary
  const [showSalary, setShowSalary] = useState(false);

  const handleCheckboxChange = () => {
    if (showBlockCategories) {
      setShowSalary(!showSalary);
    }
  };

  // Фильтр заработной платы
  const [minSalary, setMinSalary] = useState<number>(0);
  const [maxSalary, setMaxSalary] = useState<number>(350000);

  const handleMinSalaryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMinSalary(Number(event.target.value));
  };

  const handleMaxSalaryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMaxSalary(Number(event.target.value));
  };

  return (
    <main className="Main">
      <div className="sidebar-container">
        <label htmlFor="button-sidebar" id="lbl-sidebar">
          <img src={arrow} id="arrow" alt="arrow error" />
        </label>
        <input
          type="checkbox"
          id="button-sidebar"
          onChange={handleCategoriesChange}
        />

        {showBlockCategories && (
          <div className="navigation">
            <div className="categories">
              <h2>Категории</h2>

              <label className="filt">
                <input
                  type="checkbox"
                  value="ALL"
                  checked={categories.length === allCategories.length}
                  onChange={({ target: { checked } }) =>
                    setCategories(checked ? allCategories : [])
                  }
                />
                Все категории
              </label>

              <label className="filt">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  value={Category.PROGRAMMING}
                  checked={categories.includes(Category.PROGRAMMING)}
                />
                Программирование
              </label>

              <label className="filt">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  value={Category.MANAGEMENT}
                  checked={categories.includes(Category.MANAGEMENT)}
                />
                Менеджмент
              </label>

              <label className="filt">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  value={Category.DESIGN}
                  checked={categories.includes(Category.DESIGN)}
                />
                Дизайн
              </label>

              <label className="filt">
                <input
                  type="checkbox"
                  onChange={handleChange}
                  value={Category.SMM}
                  checked={categories.includes(Category.SMM)}
                />
                SMM
              </label>
            </div>

            <div className="title-open">
              <h3>Зарплата</h3>
              <label className="switch">
                <input
                  type="checkbox"
                  className="switcher"
                  onChange={handleCheckboxChange}
                />
              </label>
            </div>

            {showSalary && (
              <div className="salary-search">
                <div className="salary">
                  от
                  <input
                    id="min-salary"
                    inputMode="numeric"
                    placeholder="0"
                    value={minSalary}
                    onChange={handleMinSalaryChange}
                  />
                  <input
                    className="salary-range"
                    type="range"
                    min={0}
                    max={350000}
                    step={1000}
                    value={minSalary}
                    onChange={handleMinSalaryChange}
                  />
                  до
                  <input
                    id="max-salary"
                    inputMode="numeric"
                    placeholder="350000"
                    value={maxSalary}
                    onChange={handleMaxSalaryChange}
                  />
                  <input
                    className="salary-range"
                    type="range"
                    min={0}
                    max={350000}
                    step={1000}
                    value={maxSalary}
                    onChange={handleMaxSalaryChange}
                  />
                </div>
              </div>
            )}
            <button className="confirm">Применить</button>
          </div>
        )}
      </div>

      <div className="content">
        <div className="job1">
          <div className="head">
            <h1>Frontend developer</h1>
            <p className="username">Пупков Иван Пупович</p>
            <div className="photo-container">
              <img src={logo} className="photo" alt="logo error" />
            </div>
          </div>
          <div className="txt">
            <p>Текст</p>
            <br />
            <p className="url">Подробнее</p>
          </div>
        </div>

        <div className="resume">
          <div className="head">
            <h1>SMM менеджер</h1>
            <p className="username">Пупкова Таня Луповича</p>
            <div className="photo-container">
              <img src={logo} className="photo" alt="logo error" />
            </div>
          </div>
          <div className="txt">
            <p>Текст</p>
            <br />
            <p className="url">Подробнее</p>
          </div>
        </div>

        <div className="job2">
          <div className="head">
            <h1>Backend-разработчик</h1>
            <p className="username">Борисова Борьянова Борьковича</p>
            <div className="photo-container">
              <img src={logo} className="photo" alt="logo error" />
            </div>
          </div>
          <div className="txt">
            <p>Текст</p>
            <br />
            <p className="url">Подробнее</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Body;
