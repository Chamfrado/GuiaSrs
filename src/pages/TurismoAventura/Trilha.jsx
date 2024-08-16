import {
  Card,
  CardBody,
  CardHeader,
  Carousel,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  Col,
  Container,
  List,
  Row,
} from "reactstrap";

import img1 from "../../Resources/Images/TurismoAventura/trilha/trilha1.jpg";
import img2 from "../../Resources/Images/TurismoAventura/trilha/trilha2.jpg";
import img3 from "../../Resources/Images/TurismoAventura/trilha/trilha3.jpg";
import img4 from "../../Resources/Images/TurismoAventura/trilha/trilha4.jpg";
import { useState } from "react";

const fotos = [
  {
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
    src: img1,
    style: { maxHeight: "200px", width: "auto" }, // Adjust the maxHeight value as needed
  },
  {
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
    src: img2,
    style: { maxHeight: "200px", width: "auto" },
  },
  {
    altText: "Slide 3",
    caption: "Slide 3",
    key: 3,
    src: img3,
    style: { maxHeight: "200px", width: "auto" },
  },
  {
    altText: "Slide 1",
    caption: "Slide 1",
    key: 4,
    src: img4,
    style: { maxHeight: "200px", width: "auto" }, // Adjust the maxHeight value as needed
  },
];

const Trilha = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === fotos.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? fotos.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = fotos.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img
          src={item.src}
          alt={item.altText}
          style={{
            height: "900px",
            width: "100%",
            display: "block",
            margin: "0 auto",
          }}
        />
      </CarouselItem>
    );
  });

  return (
    <Container fluid style={{ paddingTop: 10 }}>
      <Card>
        <CardHeader>Trilha</CardHeader>

        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
          <CarouselIndicators
            items={fotos}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
        <CardBody>
          <Row
            style={{
              justifyContent: "center",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            <Col
              md={{
                offset: 1,
                size: 6,
              }}
              sm="12"
            >
              <h1>Trilha</h1>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col>
              <p style={{ textIndent: "2em" }}>
                Santa Rita do Sapucaí, uma cidade conhecida por suas belezas
                naturais e inovação tecnológica, oferece aos visitantes uma
                experiência inesquecível com suas trilhas que exploram os
                encantos dos morros locais. Entre os destaques, estão o Morro do
                Santo Cruzeiro e o Morro do Lobo, destinos imperdíveis para os
                amantes de aventura e natureza.
              </p>
              <List>
                <li>
                  {" "}
                  Morro do Santo Cruzeiro:
                  <p style={{ textIndent: "2em" }}>
                    O Morro do Santo Cruzeiro é um dos pontos mais emblemáticos
                    da cidade, oferecendo uma trilha que combina desafios
                    moderados com vistas panorâmicas espetaculares. A trilha,
                    bem marcada e acessível, leva os aventureiros a um dos
                    pontos mais altos de Santa Rita do Sapucaí, onde uma grande
                    cruz simboliza a fé e a história da cidade. Ao longo do
                    caminho, os visitantes podem desfrutar da rica flora local,
                    com espécies nativas e flores silvestres que colorem o
                    percurso. No topo, a vista recompensa todo o esforço: uma
                    paisagem que se estende por vales, montanhas e a cidade ao
                    fundo, perfeita para momentos de contemplação e fotografia.
                  </p>
                </li>
                <li>
                  {" "}
                  Morro do Lobo:
                  <p style={{ textIndent: "2em" }}>
                    Menos conhecido, mas igualmente fascinante, o Morro do Lobo
                    oferece uma trilha que atrai aqueles que buscam um contato
                    mais íntimo com a natureza. A caminhada é de intensidade
                    média e leva os aventureiros por uma rota cercada de mata
                    nativa e pequenos cursos d’água, criando uma experiência
                    imersiva no ambiente natural. O cume do Morro do Lobo é
                    menos elevado que o do Santo Cruzeiro, mas proporciona uma
                    vista única da região e uma sensação de isolamento e
                    tranquilidade. Este é o local ideal para quem deseja fugir
                    da agitação e se reconectar com a serenidade da natureza.
                  </p>
                </li>
              </List>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Trilha;
