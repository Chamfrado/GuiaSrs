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
  Row,
} from "reactstrap";

import img1 from "../../Resources/Images/TurismoAventura/esporte/esporte1.jpg";
import img2 from "../../Resources/Images/TurismoAventura/esporte/esporte2.jpg";
import img3 from "../../Resources/Images/TurismoAventura/esporte/esporte3.jpg";
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
];

const PraticasEsportivas = (args) => {
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
        <CardHeader>Praticas Esportivas</CardHeader>

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
              <h1>Praticas Esportivas</h1>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col>
              <p style={{ textIndent: "2em" }}>
                O Campão é um dos melhores lugares de Santa Rita,encontrado na R. Maria Conceição Ribeiro - Jardim das Palmeiras você pode
                conhecer novas pessoas, se divertir ou simplesmente descansar. O
                Campão possui diversas quadras, como as de vôlei, futebol e
                basquete, além de uma pista de skate, perfeita para quem ama se
                exercitar e praticar esportes.
              </p>
              <p style={{ textIndent: "2em" }}>
                Seja para praticar esportes ou simplesmente relaxar, o Campão é
                o lugar ideal para passar um tempo agradável em Santa Rita. Não
                deixe de conhecê-lo!
              </p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default PraticasEsportivas;
