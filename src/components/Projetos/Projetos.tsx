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
            <small>ReactJS com Typescript, Javascript, SASS, SEO.</small>
          </div>
          <figure>
            <a
              href="https://superfilmfloripa.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={superfilm} alt="site superfilm" />
            </a>
          </figure>
        </div>

        <div className={projetos["sessao__projetos__projeto2"]}>
          <div className={projetos["sessao__projetos__projeto2__detalhes"]}>
            <h3>LANDING PAGE - LUH TAROT</h3>
            <p>
              Uma Landing Page de uma Taróloga, com objetivo de passar
              credibilidade aos serviços oferecidos, informações sobre consultas
              de Tarot, links úteis para acompanhamento dicas e lives em redes
              sociais, dúvidas frequentes, feedbacks e informações de contato e
              endereço.
            </p>
            <p>
              Botão flutuante e links de redirecionamento de WhatsApp para
              consultas.
            </p>
            <p>
              Formulário de Atendimento via E-mail, com disparo de informações
              pessoais e tipo de consulta via EmailJS com todas informações para
              uma tiragem de Tarot e com redirecionamento para Checkout de
              Pagamento.
            </p>
            <p>
              Estratégias SEO para captação de clientes presenciais na região de
              atendimento e para clientes online.
            </p>
            <small>
              ReactJS com Typescript, Javascript, SASS, SEO, EmailJS.
            </small>
          </div>

          <figure>
            <a href="https://luhtarot.com.br/" target="_blank" rel="noreferrer">
              <img src={luhtarot} alt="site superfilm" />
            </a>
          </figure>
        </div>

        <div className={projetos["sessao__projetos__projeto"]}>
          <div className={projetos["sessao__projetos__projeto__detalhes"]}>
            <h3>SITE - WHAT TO DO IN FLORIANOPÓLIS?</h3>
            <p>
              Um site em inglês com público alvo turistas estrageiros na cidade
              de Florianópolis, com dicas e listas de melhores coisas para
              fazer, melhores bairros, praias, trilhas e atrações em geral.
            </p>
            <p>
              Com um intuito de deixar o site com pequenas sessões de
              redirecionamento para compras pelo programa de afiliados da
              Viator, onde cada anúncio está alocado apenas em páginas que
              correspodem ao contexto, diferente da maioria dos blogs de turismo
              que contém dezenas de anúncios por toda a tela.
            </p>
            <p>
              O site contém um back-end para criação de login ou login social do
              Google, para o usuário poder favoritar e comentar em atrações e
              lugares, podendo acessar estes mesmos em uma lista de favoritos.
            </p>
            <p>
              Estratégias SEO com palavras-chave dos principais aspectos de
              pesquisa de Florianópolis em inglês feitas pelo mundo.
            </p>
            <small>
              PHP, MySQL, Login Social Google, JQuery, AJAX, CSS, Bootstrap,
              SEO.
            </small>
          </div>
          <figure>
            <a
              href="https://todoinflorianopolis.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={florianopolis} alt="site to do in florianopolis" />
            </a>
          </figure>
        </div>

        <div className={projetos["sessao__projetos__projeto2"]}>
          <div className={projetos["sessao__projetos__projeto2__detalhes"]}>
            <h3>E-COMMERCE - SUPERFILM STORE</h3>
            <p>
              Um site de E-commerce implantado a partir da plataforma Gulpy, com
              customizações CSS feitas com aplicação de código no CMS.
            </p>
            <p>
              Home, páginas de categoria e páginas de produtos com estratégias
              de SEO.
            </p>
            <p>*projeto ainda em andamento/implantação.</p>
            <small>CMS Yampi, CSS, SEO.</small>
          </div>
          <figure>
            <a
              href="https://superfilmstore.com.br/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={superfilmstore} alt="site superfilm store" />
            </a>
          </figure>
        </div>
      </div>
    </section>
  );
};

export { Projetos };
