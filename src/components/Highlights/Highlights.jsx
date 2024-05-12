import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Highlights() {
  const Data = [
    {
      id: 1,
      image: require("../../Assets/Cake 2.png"),
      title: "cake",
      description:
        "Strawberry cake: Um bolo de camadas suculentas, decorado com uma floresta encantadora de frutas vermelhas e flores silvestres comestíveis. Perfeito para celebrar um aniversário mágico!",
    },
    {
      id: 2,
      image: require("../../Assets/Cake.png"),
      title: "cake",
      description:
        "Romance cake: Este bolo elegante é uma obra-prima de sabor e design. Com camadas de bolo de baunilha e recheio de creme, é adornado com blueberry, chocolate branco  e uma camada de massa crocante evocando a beleza serena de um casamento à beira-mar.",
    },
    {
      id: 3,
      image: require("../../Assets/Cake vanilla.png"),
      title: "cake vanilla",
      description:
        "Vanilla cake: Um bolo vibrante e alegre que é uma explosão de descoberta. Cada camada é uma surpresa de sabor, coberta com glacê de baunilha. É a escolha perfeita para celebrar qualquer ocasião especial com alegria e vivacidade.",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.title}>
          <h3>
            <span>Comemore</span> sem perder tempo!
          </h3>
        </div>
        <div className={styles.description}>
          <p>
            Bem-vindo à <span>Dolce Vita Bakery</span>, onde cada mordida é uma
            viagem de sabor à Itália! Delicie-se com os sabores autênticos e os
            aromas sedutores da nossa seleção de bolos, tortas, biscoitos e
            doces, feitos com paixão e tradição italiana. Explore o nosso  <span>menu</span> e
            deixe-se levar pela doçura da Dolce Vita.
          </p>
        </div>
        <button className={styles.btn}>Fazer pedido</button>
      </div>

      <Swiper
        className={styles.slideContainer}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title }) => {
          return (
            <SwiperSlide key={id} className={styles.imgContainer}>
              <img src={image} alt={title} className={styles.highlightImg} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Highlights;
