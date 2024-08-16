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

import img1 from "../../Resources/Images/Eventos/hacktown/hacktown1.jpg";
import img2 from "../../Resources/Images/Eventos/hacktown/hacktown2.jpg";
import img3 from "../../Resources/Images/Eventos/hacktown/hacktown3.jpg";
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

const Hacktown = (args) => {
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
        <CardHeader>Hacktown</CardHeader>

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
              <h1>Hacktown</h1>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col>
              <p style={{ textIndent: "2em" }}>
                O Hacktown é um festival de inovação e criatividade que ocorre
                anualmente em Santa Rita do Sapucaí, Minas Gerais. O evento
                reúne milhares de pessoas de áreas como tecnologia,
                empreendedorismo, música, design e cultura, em um formato
                descentralizado, com atividades espalhadas por diversos espaços
                da cidade, como bares, escolas e praças. O ambiente colaborativo
                e a proposta disruptiva atraem profissionais, estudantes e
                entusiastas interessados em novas ideias e tendências.
              </p>
              <p style={{ textIndent: "2em" }}>
                Dentro desse contexto, a ETE (Escola Técnica de Eletrônica) e o
                Inatel (Instituto Nacional de Telecomunicações) desempenham
                papéis cruciais no festival. A ETE, renomada pela formação
                técnica em eletrônica, promove workshops e palestras práticas,
                enquanto o Inatel, referência em engenharia e telecomunicações,
                oferece atividades focadas em inovação tecnológica e
                transformação digital. Essas instituições reforçam o elo entre
                educação e tecnologia no Hacktown, impulsionando o potencial
                criativo e inovador do evento.
              </p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Hacktown;
