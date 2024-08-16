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

import img1 from "../../Resources/Images/Eventos/projete/projete1.jpg";
import img2 from "../../Resources/Images/Eventos/projete/projete2.jpg";
import img3 from "../../Resources/Images/Eventos/projete/projete3.jpg";
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

const Projete = (args) => {
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
        <CardHeader>PROJETE</CardHeader>

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
              <h1>PROJETE</h1>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col>
              <p style={{ textIndent: "2em" }}>
                Hoje a PROJETE é dos maiores eventos tecnológicos de Santa Rita
                do Sapucaí, com a exposição de mais de 100 projetos de alunos da
                ETE FMC e de escolas de todo o Brasil. Conta também com uma
                programação cultural e oportuniza aos visitantes a participação
                em palestras, minicursos, oficinas.
              </p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Projete;
