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
import ts from "./assets/imgs/ts.png";
import todo from "./assets/imgs/todo.png";
import game from "./assets/imgs/game.png";
import despesas from "./assets/imgs/despesas.png";
import vtexio from "./assets/imgs/vtexio.png";
import reactproject from "./assets/imgs/react-project.png";
import attractions from "./assets/imgs/attractions.png";
import checkout from "./assets/imgs/vtexcheckout.png";
import landing from "./assets/imgs/landing.png";
import spotify from "./assets/imgs/spotify.png";
import paralax from "./assets/imgs/paralax.png";
import finans from "./assets/imgs/finans.png";
import calculadora from "./assets/imgs/calculadora.png";
import luhtarot from "./assets/imgs/luhtarot.png";
import superfilm from "./assets/imgs/superfilm-store.png";
import pdf from "./assets/cv.pdf";
import { Projetos } from "../Projetos/Projetos";

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
            Hello World! Sou <strong>Cainã Milech</strong>, tenho 29 anos e moro
            em Florianopolis, Santa Catarina.
          </p>
          <p>
            Sou Freelancer na área de
            <strong> Desenvolvimento Web </strong>, ofereço soluções para
            implantações, desenvolvimento ou tarefas específicas em qualquer
            área de um projeto Web. Abaixo está as tecnologias e ferramentas no
            qual tenho algum conhecimento ou me sinto confortável para
            trabalhar.
          </p>

          <div>
            <p>
              Fluência em Ingles: C1 Advanced (EF SET Test)
              <a
                className={main["section__about__certificate"]}
                href="https://www.efset.org/cert/bVvi7N"
                target="_blank"
                rel="noreferrer"
              >
                (Link do Certificado)
              </a>
            </p>
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
              <a href={pdf} download="cv-caina-milech">
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
              Contato: +55 (48) 996802068
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
              <img src={php} alt="php icon" />
              <span>PHP</span>
            </li>

            <li>
              <img src={ts} alt="php icon" />
              <span>TypeScript</span>
            </li>
          </ul>
          <ul>
            <li>
              <img src={mysql} alt="mysql icon" />
              <span>MySQL</span>
            </li>

            <li>
              <img src={sass} alt="sass icon" />
              <span>SASS</span>
            </li>

            <li>
              <img src={html} alt="html icon" />
              <span>HTML</span>
            </li>

            <li>
              <img src={css} alt="javascript icon" />
              <span>CSS</span>
            </li>

            <li>
              <img src={seo} alt="seo icon" />
              <span>SEO</span>
            </li>
          </ul>
        </div>
      </section>

      <Projetos />

      <section className={main["section-projects"]}>
        <h2>PROJETOS DE ESTUDOS</h2>

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
                  Back-end and Front-end with PHP, MySQL, Login Social (Google
                  Client), JQuery, AJAX, CSS, Bootstrap.
                </p>
              </article>
            </a>
          </div>

          <div className={main["section-projects__list__item"]}>
            <a
              href="https://superfilmstore.com.br"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={superfilm} alt="superfilm store" />
                </figure>
                <h3>Superfilm Store</h3>

                <p>
                  E-commerce. Implantação e Manutenção. Customizações CSS, SEO,
                  Layouts e Gestão do CMS.
                </p>
                <small>(em construção)</small>
              </article>
            </a>
          </div>

          <div className={main["section-projects__list__item"]}>
            <a
              href="https://youtu.be/fkppkICOs3Q"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={vtexio} alt="product page" />
                </figure>
                <h3>Product Page - E-commerce</h3>
                <p>VTEX IO, ReactJS, Javascript, SASS.</p>
              </article>
            </a>
          </div>
        </div>

        <div className={main["section-projects__list"]}>
          <div className={main["section-projects__list__item"]}>
            <a href="https://luhtarot.com.br" target="_blank" rel="noreferrer">
              <article>
                <figure>
                  <img src={luhtarot} alt="luh tarot" />
                </figure>
                <h3>Luh Tarot</h3>
                <p>ReactJS, Javascript, HTML, SASS.</p>
              </article>
            </a>
          </div>

          <div className={main["section-projects__list__item"]}>
            <a
              href="https://youtu.be/eRm_hPDb7bk"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={checkout} alt="ecommerce vtex page" />
                </figure>
                <h3>Checkout E-commerce VTEX CMS + API Request</h3>
                <p>VTEX CMS, Javascript, API Request, Slick Carousel, Sass.</p>
              </article>
            </a>
          </div>

          <div className={main["section-projects__list__item"]}>
            <a
              href="https://youtu.be/yzhuf6k1IFc"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={reactproject} alt="react project" />
                </figure>
                <h3>Institutional Website + Forms</h3>
                <p>
                  ReactJS, Javascript, Router Dom, Formik, Yup, Masks, HTML,
                  SASS.
                </p>
              </article>
            </a>
          </div>
        </div>

        <div className={main["section-projects__list"]}>
          <div className={main["section-projects__list__item"]}>
            <a
              href="https://youtu.be/KWxhh53sOIw"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={attractions} alt="attractions page" />
                </figure>
                <h3>Attractions page - Add and List with Carousel</h3>
                <p>Javascript, Slick Carousel, Sass.</p>
              </article>
            </a>
          </div>

          <div className={main["section-projects__list__item"]}>
            <a
              href="https://cainamilech.github.io/despesas-pessoais/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={despesas} alt="to do in florianopolis" />
                </figure>
                <h3>Despesas Pessoais</h3>
                <p>Javascript, HTML, CSS, Bootstrap. Data in LocalStorage.</p>
              </article>
            </a>
          </div>

          <div className={main["section-projects__list__item"]}>
            <a
              href="https://cainamilech.github.io/landing-page/"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={landing} alt="landing page" />
                </figure>
                <h3>Landing Page</h3>
                <p>HTML and CSS</p>
              </article>
            </a>
          </div>
        </div>

        <div className={main["section-projects__list"]}>
          <div className={main["section-projects__list__item"]}>
            <a
              href="https://cainamilech.github.io/game-mata-mosquito/"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={game} alt="game mata mosquito" />
                </figure>
                <h3>Game: Mata Mosquito</h3>
                <p>Javascript, HTML, CSS, Bootstrap</p>
              </article>
            </a>
          </div>

          <div className={main["section-projects__list__item"]}>
            <a
              href="https://cainamilech.github.io/calculadora/"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={calculadora} alt="calculator" />
                </figure>
                <h3>Calculator</h3>
                <p>Javascript, HTML and CSS</p>
              </article>
            </a>
          </div>

          <div className={main["section-projects__list__item"]}>
            <a
              href="https://github.com/cainamilech/spotify-bootstrap"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={spotify} alt="spotify" />
                </figure>
                <h3>Clone Spotify</h3>
                <p>HTML, CSS, Bootstrap</p>
              </article>
            </a>
          </div>
        </div>

        <div className={main["section-projects__list"]}>
          <div className={main["section-projects__list__item"]}>
            <a
              href="https://cainamilech.github.io/finans-bootstrap/"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={finans} alt="finans page" />
                </figure>
                <h3>Institutional Page</h3>
                <p>Simple page with HTML, CSS and Bootstrap.</p>
              </article>
            </a>
          </div>

          <div className={main["section-projects__list__item"]}>
            <a
              href="https://cainamilech.github.io/Projeto-Efeito-Paralax/"
              target="_blank"
              rel="noreferrer"
            >
              <article>
                <figure>
                  <img src={paralax} alt="paralax page" />
                </figure>
                <h3>Paralax</h3>
                <p>Simple page with paralax effect. HTML and CSS.</p>
              </article>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export { Main };
