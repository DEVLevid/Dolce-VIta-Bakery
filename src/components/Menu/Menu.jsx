import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();
function Menu() {
  const Data = [
    {
      image: require("../../Assets/Brownie.png"),
      id: 1,
      name: "Brownie",
      description:
        "Um delicioso e decadente brownie, com uma textura macia por dentro e uma crosta crocante por fora. Feito com chocolate rico e pedaços de nozes, é o equilíbrio perfeito entre doce e indulgente.",
    },
    {
      image: require("../../Assets/Cake 2.png"),
      id: 2,
      name: "Cake",
      description:
        "Um bolo de aparência tentadora, com camadas fofas e um glacê cremoso. Decorado com detalhes elaborados e frutas frescas, é uma escolha clássica para celebrações ou simplesmente para um momento de indulgência.",
    },
    {
      image: require("../../Assets/Cake piece.png"),
      id: 3,
      name: "Cake piece",
      description:
        "Um pequeno pedaço de bolo, perfeito para saborear como um deleite rápido. Com uma fatia generosa de bolo e talvez uma cobertura extra, é uma maneira conveniente de desfrutar do sabor de um bolo sem precisar cortar uma fatia inteira.",
    },
    {
      image: require("../../Assets/Cake vanilla.png"),
      id: 4,
      name: "Cake vanilla",
      description:
        "Um bolo suave e delicado com um sabor clássico de baunilha. Coberto com uma camada fina de glacê ou simplesmente polvilhado com açúcar de confeiteiro, é uma escolha simples, mas irresistível, para os amantes de sabores mais suaves.",
    },
    {
      image: require("../../Assets/Cookies.png"),
      id: 5,
      name: "Cookies",
      description:
        "Uma variedade de cookies frescos e caseiros, recém-saídos do forno. Com uma mistura de gotas de chocolate, aveia e nozes, cada mordida é uma explosão de sabores e texturas que agrada a todos os paladares.",
    },
    {
      image: require("../../Assets/Croasaint.png"),
      id: 6,
      name: "Croasaint",
      description:
        "Um croissant dourado e escamoso, perfeitamente assado para obter uma crocância irresistível. Com camadas macias e um sabor levemente amanteigado, é um clássico da pastelaria francesa que é adorado em todo o mundo.",
    },
    {
      image: require("../../Assets/Muffins.png"),
      id: 7,
      name: "Muffins",
      description:
        "Muffins recém-assados, ainda quentes e prontos para serem saboreados. Com uma variedade de sabores, cada mordida é uma explosão de sabor úmido e reconfortante. Ideal para um café da manhã rápido ou um lanche indulgente a qualquer hora do dia.",
    },
  ];

  return (
    <div className={styles.container}>
      <h3>Menu</h3>
      <Swiper
        slidesPerView={2.5}
        navigation
        className={styles.swiper}
        loop={true}
        grabCursor={true}
      >
        {Data.map(({ image, id, name, description }) => {
          return (
            <SwiperSlide className={styles.swiperSlide}>
              <div className={styles.cardContainer}>
                <div className={styles.cardContent} key={id}>
                  <div className={styles.imgContainer}>
                    <img src={image} alt={name} />
                  </div>
                  <div className={styles.descriptionContainer}>
                    <h3 className={styles.title}>
                      <span>{name}</span>
                    </h3>
                    <p className={styles.description}>{description}</p>
                    <button className={styles.btn}>Encomendar</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Menu;
