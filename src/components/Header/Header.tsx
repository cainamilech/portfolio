import header from "./assets/modules/Header.module.scss";
import portfolio from "./assets/imgs/portfolio.png";

const Header = () => {
  return (
    <header className={header["header"]}>
      <div className={header["header__portfolio"]}>
        <img src={portfolio} alt="portfolio icon" />
        <span>Portfolio</span>
      </div>

      <div className={header["header__wrapper"]}>
        <div className={header["header__wrapper__name"]}>
          <h1>Cainã Milech</h1>
        </div>
        <p className={header["header__wrapper__role"]}>
          DESENVOLVEDOR WEB - FREELANCER
        </p>
      </div>
      <div className={header["header__right"]}></div>
    </header>
  );
};

export { Header };
