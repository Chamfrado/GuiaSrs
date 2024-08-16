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

import img1 from "../../Resources/Images/Artes/monumento/monumento1.jpg";
import img2 from "../../Resources/Images/Artes/monumento/monumento2.jpg";
import img3 from "../../Resources/Images/Artes/monumento/monumento3.jpg";
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

const Monumentos = (args) => {
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
        <CardHeader>Monumentos</CardHeader>

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
              <h1>Monumentos</h1>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col>
              <List>
                <li>
                  Santa Rita de Cássia:
                  <p style={{ textIndent: "2em" }}>
                    A imagem de Santa Rita de Cássia na entrada da cidade de
                    Santa Rita do Sapucaí, em Minas Gerais, é um símbolo
                    importante para a comunidade local. Santa Rita de Cássia,
                    conhecida como a "santa das causas impossíveis", é a
                    padroeira da cidade, e sua imagem representa a fé e a
                    devoção dos moradores.
                  </p>
                  <p style={{ textIndent: "2em" }}>
                    A escultura é uma referência imediata para quem chega à
                    cidade, destacando a religiosidade e a cultura local. Além
                    de ser um ponto turístico, a imagem serve como um marco de
                    boas-vindas, acolhendo os visitantes e expressando a
                    importância da figura de Santa Rita para a identidade da
                    cidade.
                  </p>
                  <p style={{ textIndent: "2em" }}>
                    Para os moradores, a imagem também simboliza proteção e
                    esperança, reforçando a tradição religiosa que é forte na
                    região. Ela é frequentemente visitada por fiéis que buscam
                    inspiração, consolo e um momento de oração.
                  </p>
                  <p style={{ textIndent: "2em" }}>
                    Encontrada na R. Augusto R de Souza.
                  </p>
                </li>
                <li>
                  Estátua De Delfim Moreira :
                  <p style={{ textIndent: "2em" }}>
                    Esse monumento é uma homenagem a Delfim Moreira, um político
                    brasileiro que foi Presidente do Brasil entre 1918 e 1919,
                    durante um período de transição devido à morte do presidente
                    eleito, Rodrigues Alves.
                  </p>
                  <p style={{ textIndent: "2em" }}>
                    Delfim Moreira nasceu em Santa Rita do Sapucaí e é uma
                    figura de grande importância para a história da cidade. A
                    estátua foi erguida como um tributo ao seu legado, tanto
                    para a cidade quanto para o país. O monumento mostra um
                    busto de Delfim Moreira sobre um pedestal, que inclui
                    esculturas de outras figuras, possivelmente representando o
                    povo ou simbolizando justiça, sabedoria e liderança.
                  </p>
                  <p style={{ textIndent: "2em" }}>
                    O local onde a estátua está situada é um ponto importante na
                    cidade, tanto pela sua localização central quanto pelo valor
                    histórico, servindo como um local de memória para os
                    moradores e também como um atrativo turístico para quem
                    visita a cidade.
                  </p>
                  <p style={{ textIndent: "2em" }}>
                    Encontrado na Praça Santa Rita , Centro .
                  </p>
                </li>
                <li>
                  Estátua De Francisco Moreira da Costa:
                  <p style={{ textIndent: "2em" }}>
                  A estátua homenageia Francisco Moreira da Costa, uma figura importante para a cidade de Santa Rita do Sapucaí.  
                  </p>
                  <p style={{ textIndent: "2em" }}>
                    Ele foi um benfeitor local e desempenhou um papel significativo no desenvolvimento da cidade. A estátua, localizada em uma praça arborizada, reflete o respeito e a gratidão da comunidade pelos seus feitos. 
                  </p>
                  <p style={{ textIndent: "2em" }}>
                    Encontrado na Praça Dr.Delfim Moreira.
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

export default Monumentos;
