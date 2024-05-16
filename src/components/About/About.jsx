import styles from "./styles.module.css";
import img1 from "../../Assets/people.jpg";
import Scrolly from "../Scroll/Scrolly";

function About() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Sobre a Dolce Vita</h3>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.imgContainer}>
          <img src={img1} alt="about" />
        </div>
        <div className={styles.history}>
          <Scrolly>
            <h4>Nossa História</h4>
          </Scrolly>
          <Scrolly>
            {" "}
            <p>
              A jornada começou com a matriarca da família, Nonna Maria, cujas
              mãos habilidosas e coração generoso eram lendários entre os
              moradores locais. Sua cozinha sempre estava cheia de aromas
              tentadores, enquanto ela preparava os pratos mais deliciosos e
              autênticos da tradição italiana.
            </p>
          </Scrolly>

          <Scrolly>
            <p>
              Com o passar dos anos, a reputação da Nonna Maria se espalhou além
              das fronteiras da cidade, atraindo visitantes ávidos por uma
              experiência gastronômica verdadeiramente italiana. Foi então que
              seus filhos, Marco e Sofia, decidiram levar o legado da família
              para um novo patamar, inaugurando a <span>Dolce Vita Bakery</span>
              .
            </p>
          </Scrolly>
          <Scrolly>
            <p>
              Inspirados pela herança culinária de sua mãe, Marco e Sofia
              combinaram tradição e inovação para criar um espaço onde os
              sabores da Itália pudessem ser apreciados em cada mordida. Com
              ingredientes frescos e receitas transmitidas de geração em
              geração, a <span> Dolce Vita Bakery</span> rapidamente se tornou
              um ponto de referência na comunidade local. Hoje, estamos
              orgulhosos de continuar o legado da nossa família, oferecendo aos
              nossos clientes não apenas produtos de alta qualidade, mas também
              uma experiência que celebra a riqueza da cozinha italiana.
            </p>
          </Scrolly>
          <Scrolly>
            <p>
              Cada pão fresco, cada biscoito crocante e cada fatia de bolo são
              feitos com o mesmo amor e dedicação que inspiraram a Nonna Maria
              há tantos anos. Bem-vindo à <span>Dolce Vita Bakery</span>, onde
              cada mordida é uma viagem à Itália!
            </p>
          </Scrolly>
        </div>
      </div>
    </div>
  );
}

export default About;
