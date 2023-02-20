import main from "./assets/modules/Main.module.scss";
import linkedin from "./assets/imgs/linkedin.png";
import download from "./assets/imgs/download.png";
import github from "./assets/imgs/github.png";
import profile from "./assets/imgs/profile.jpeg";
import gmail from "./assets/imgs/gmail.png";
import phone from "./assets/imgs/telephone.png";
import js from "./assets/imgs/js.png";
import react from "./assets/imgs/react.png";
import php from "./assets/imgs/php.png";
import mysql from "./assets/imgs/mysql.png";
import html from "./assets/imgs/html.png";
import sass from "./assets/imgs/sass.png";
import css from "./assets/imgs/css.png";
import seo from "./assets/imgs/seo.png";
import vtex from "./assets/imgs/vtex.png";
import todo from "./assets/imgs/todo.png";

const Main = () => {
  return (
    <main className={main["main"]}>
      <section className={main["section"]}>
        <div className={main["section__div"]}>
          <figure>
            <img
              className={main["section__div__photo"]}
              src={profile}
              alt="caina profile"
            />
          </figure>
        </div>

        <div className={main["section__about"]}>
          <p>
            Hello World! I'm <strong>Cainã Milech</strong>, 28 years old,
            Brazilian, born in Pelotas (RS), living in Florianopolis (SC).
          </p>
          <p>
            <strong>Developer Web Front-End</strong>, and some knowledge with
            Back-End and SEO.
          </p>

          <div>
            <p>
              English Fluency: C1 Advanced (EF SET Test)
              <a
                className={main["section__about__certificate"]}
                href="https://www.efset.org/cert/bVvi7N"
                target="_blank"
                rel="noreferrer"
              >
                (Certificate link)
              </a>
            </p>
            <p>Portuguese Fluency: Native</p>
          </div>

          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/cainamilech/"
              >
                <img src={linkedin} alt="linkedin icon" /> Linkedin
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/cainamilech"
              >
                <img src={github} alt="linkedin icon" /> GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/cainamilech/"
              >
                Download CV <img src={download} alt="linkedin icon" />
              </a>
            </li>
          </ul>
          <div>
            <p className={main["contact"]}>
              <img src={gmail} alt="gmail icon" /> E-mail: cainamilech@gmail.com
            </p>
            <p className={main["contact"]}>
              <img src={phone} alt="phone icon" />
              Phone Number: +55 48 996802068
            </p>
          </div>
        </div>
      </section>

      <section className={main["section-skills"]}>
        <h2>Skills</h2>
        <div className={main["section-skills__list"]}>
          <ul>
            <li>
              <img src={react} alt="javascript icon" />
              <span>ReactJS</span>
            </li>

            <li>
              <img src={vtex} alt="javascript icon" />
              <span>VTEX IO</span>
            </li>

            <li>
              <img src={js} alt="javascript icon" />
              <span>JavaScript</span>
            </li>

            <li>
              <img src={php} alt="javascript icon" />
              <span>PHP</span>
            </li>
          </ul>
          <ul>
            <li>
              <img src={mysql} alt="javascript icon" />
              <span>MySQL</span>
            </li>

            <li>
              <img src={sass} alt="javascript icon" />
              <span>SASS</span>
            </li>

            <li>
              <img src={html} alt="javascript icon" />
              <span>HTML</span>
            </li>

            <li>
              <img src={css} alt="javascript icon" />
              <span>CSS</span>
            </li>

            <li>
              <img src={seo} alt="javascript icon" />
              <span>SEO</span>
            </li>
          </ul>
        </div>
      </section>

      <section className={main["section-projects"]}>
        <h2>Projects</h2>

        <div className={main["section-projects__list"]}>
          <div className={main["section-projects__list__item"]}>
            <a
              href="https://todoinflorianopolis.com"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={todo} alt="to do in florianopolis" />
                </figure>
                <h3>Things To Do in Florianopolis</h3>
                <p>
                  Back-end: PHP, MySQL, JQuery, Login Social (Google Client).
                  Front-end: HTML, CSS, Bootstrap, AJAX, Javascript. SEO.
                </p>
              </article>
            </a>
          </div>
          <div className={main["section-projects__list__item"]}>
            <a href="https://www.linkedin.com/in/cainamilech/">
              <article>
                <figure>
                  <img src={todo} alt="to do in florianopolis" />
                </figure>
                <h3>Things To Do in Florianopolis</h3>
                <p>
                  Back-end: PHP, MySQL, JQuery, Login Social (Google Client).
                  Front-end: HTML, CSS, Bootstrap, AJAX
                </p>
              </article>
            </a>
          </div>
          <div className={main["section-projects__list__item"]}>
            <a href="https://www.linkedin.com/in/cainamilech/">
              <article>
                <figure>
                  <img src={todo} alt="to do in florianopolis" />
                </figure>
                <h3>Things To Do in Florianopolis</h3>
                <p>
                  Back-end: PHP, MySQL, JQuery, Login Social (Google Client).
                  Front-end: HTML, CSS, Bootstrap, AJAX
                </p>
              </article>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export { Main };
