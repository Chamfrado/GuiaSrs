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

import img1 from "../../Resources/Images/Artes/museu/museu1.jpg";
import img2 from "../../Resources/Images/Artes/museu/museu2.jpg";
import img3 from "../../Resources/Images/Artes/museu/museu3.jpg";
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

const Museu = (args) => {
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
        <CardHeader>Museu</CardHeader>

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
              <h1>Museu</h1>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col>
              <p style={{ textIndent: "2em" }}>
                Criado em 15 de dezembro de 1982 – Lei 1.143/82 Tombado como
                Patrimônio Histórico em 10 de outubro de 2006, pelo Decreto No
                5.457/2006 Na praça Dr. Delfim Moreira, a cinco minutos de
                caminhada do centro comercial de Santa Rita do Sapucaí e a pouco
                mais de 50 metros da Rodovia BR 459, localiza-se o Museu
                Histórico Municipal Dr. Delfim Moreira, ocupando imóvel que já
                foi a residência do ilustre ex-morador de nossa cidade e
                ex-presidente da República. A instituição realiza anualmente a
                Semana dos Museus em sintonia com o Ibram (Instituto Brasileiro
                de Museus), a Jornada Mineira do Patrimônio Cultural e a
                Primavera dos Museus.
              </p>
              <p style={{ textIndent: "2em" }}>
                Horário de visitação: de segunda a sexta, das 8h30 às 11h30 e
                13h às 16h30
              </p>
              <p style={{ textIndent: "2em" }}>
                A história da formação do museu se mistura com a história do
                Feirão Folclórico. O grupo responsável pela criação do Feirão
                Folclórico, sentindo a necessidade de reunir e preservar peças,
                documentos e demais objetos que contassem um pouco da história
                de nossa cidade, resolveu criar as gincanas para atingir esse
                objetivo.
              </p>
              <p style={{ textIndent: "2em" }}>
                Praça Delfim Moreira, 42 – Família Andrade Tel ( 35 ) 3473.1071
                 Email: museudelfimmoreira@pmsrs.mg.gov.br
              </p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Museu;
