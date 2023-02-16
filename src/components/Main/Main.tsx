import main from "./assets/modules/Main.module.scss";
import linkedin from "./assets/imgs/linkedin.png";
import download from "./assets/imgs/download.png";
import github from "./assets/imgs/github.png";
import profile from "./assets/imgs/profile.jpeg";
import gmail from "./assets/imgs/gmail.png";
import phone from "./assets/imgs/telephone.png";

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

      <section>
        <h2>Skills</h2>
        <ul>
          <li>JS</li>
          <li>ReactJS</li>
          <li>VTEX IO</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>HTML</li>
          <li>SASS</li>
          <li>JQuery</li>
          <li>SEO</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>

        <div>
          <a href="https://www.linkedin.com/in/cainamilech/">
            <article>
              <h3>Things To Do in Florianopolis</h3>
              <div>IMAGEM</div>
              <p>sobre things to doin floripa</p>
            </article>
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/cainamilech/">
            <article>
              <h3>Things To Do in Florianopolis</h3>
              <div>IMAGEM</div>
              <p>sobre things to doin floripa</p>
            </article>
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/cainamilech/">
            <article>
              <h3>Things To Do in Florianopolis</h3>
              <div>IMAGEM</div>
              <p>sobre things to doin floripa</p>
            </article>
          </a>
        </div>
      </section>

      <div>conteudo port</div>

      <div>conteudo port</div>
    </main>
  );
};

export { Main };
