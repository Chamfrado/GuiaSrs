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

import img1 from "../../Resources/Images/Artes/grafite/grafite1.jpg";
import img2 from "../../Resources/Images/Artes/grafite/grafite2.jpg";
import img3 from "../../Resources/Images/Artes/grafite/grafite3.jpg";
import img4 from "../../Resources/Images/Artes/grafite/grafite4.jpg";
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
    altText: "Slide 3",
    caption: "Slide 3",
    key: 4,
    src: img4,
    style: { maxHeight: "200px", width: "auto" },
  }
];

const Grafites = (args) => {
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
        <CardHeader>Grafites</CardHeader>

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
              <h1>Grafites</h1>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col>
              <p style={{ textIndent: "2em" }}>
                O Grande legado da Galeria Aberta de Arte Urbana (GAAU) da
                Beira-Rio foi ter trabalhado a a sua localidade, ter buscado
                interagir com as figuras que transitam pela margem do Rio
                Sapucaí e também ter envolvido em todo seu processo os Jovens do
                stencil, das oficinas do Espaço ‘Das Artes’. Essa relação de
                reconhecimento e conhecimento gerou um dos painéis mais
                reconhecidos da Galeria, o painel dos pescadores.​ Ele foi
                composto por 5 icones da cidade: Edmundão, Pardal, Seu Gilberto,
                Seu Athayde e Jorjão.​
              </p>
              <p style={{ textIndent: "2em" }}>
                Outras galerias na cidade:​ A Galeria Aberta e Arte Urbana é o
                maior dos diversos complexos de arte urbana da pequena cidade de
                40 mil habitantes que é polo tecnológico e criativo.​
              </p>
              <p style={{ textIndent: "2em" }}>
                Santa Rita do Sapucaí (MG) é uma cidade com uma história
                surpreendente, especialmente a de Sinhá Moreira, uma mulher à
                frente de seu tempo. Ela era rica, bem-educada e se separou na
                década de 1940, voltando para sua cidade natal. Após herdar
                terras, fundou a primeira escola técnica de eletrônica da
                América Latina em 1959, transformando a cidade em um pólo
                tecnológico. Ela enfrentou preconceitos, mas seu legado é
                lembrado em um museu e em um grafite na cidade.​
              </p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Grafites;
