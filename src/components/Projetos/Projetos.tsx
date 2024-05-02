import projetos from "./assets/Projetos.module.scss";
import superfilm from "./imgs/site-superfilm.png";
import superfilmstore from "./imgs/site-superfilmstore.png";
import luhtarot from "./imgs/site-luhtarot.png";
import florianopolis from "./imgs/site-florianopolis.png";

const Projetos = () => {
  return (
    <section className={projetos["sessao"]}>
      <h2>PROJETOS REAIS</h2>
      <div className={projetos["sessao__projetos"]}>
        <div className={projetos["sessao__projetos__projeto"]}>
          <div className={projetos["sessao__projetos__projeto__detalhes"]}>
            <h3>LANDING PAGE - SUPERFILM</h3>
            <p>
              Uma Landing Page simples porém com tudo que um site de
              micro-empreendedor individual precisa para alcançar seus clientes,
              passando toda a credibilidade de um serviço profissional a ser
              oferecido.
            </p>
            <p>
              Uma estratégia SEO direcionada a captação de clientes em bairros
              específicos da área de atuação, além de uma variedade de
              palavras-chaves nos quais é feito a pesquisa do tipo de serviço no
              Google.
            </p>
            <p>
              O site conta com uma sessão de esclarecimentos e dúvidas
              frequentes também visando um bom ranqueamento no Google. Além de
              botões de fácil acesso para entrar em contato para orçamentos.
            </p>
          </div>
          <figure>
            <img src={superfilm} alt="site superfilm" />
          </figure>
        </div>

        <div className={projetos["sessao__projetos__projeto2"]}>
          <div className={projetos["sessao__projetos__projeto2__detalhes"]}>
            <h3>Landing Page Superfilm</h3>
            <p>
              anding Page Superfilmanding Page Superfilmanding Page
              Superfilmanding Page Superfilmanding Page Superfilmanding Page
              Superfilmanding Page Superfilmanding Page Superfilmanding Page
              Superfilm
            </p>
          </div>
          <figure>
            <img src={luhtarot} alt="site superfilm" />
          </figure>
        </div>

        <div className={projetos["sessao__projetos__projeto"]}>
          <div className={projetos["sessao__projetos__projeto__detalhes"]}>
            <h3>Landing Page Superfilm</h3>
            <p>
              anding Page Superfilmanding Page Superfilmanding Page
              Superfilmanding Page Superfilmanding Page Superfilmanding Page
              Superfilmanding Page Superfilmanding Page Superfilmanding Page
              Superfilm
            </p>
          </div>
          <figure>
            <img src={florianopolis} alt="site to do in florianopolis" />
          </figure>
        </div>

        <div className={projetos["sessao__projetos__projeto2"]}>
          <div className={projetos["sessao__projetos__projeto2__detalhes"]}>
            <h3>Landing Page Superfilm</h3>
            <p>
              anding Page Superfilmanding Page Superfilmanding Page
              Superfilmanding Page Superfilmanding Page Superfilmanding Page
              Superfilmanding Page Superfilmanding Page Superfilmanding Page
              Superfilm
            </p>
          </div>
          <figure>
            <img src={superfilmstore} alt="site superfilm store" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export { Projetos };
