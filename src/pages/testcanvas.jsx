import {
    Offcanvas,
    OffcanvasBody,
    OffcanvasHeader,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavItem,
    Row,
    Col,
    CardBody,
    Card,
    Collapse,
    Button,
    Container,
  } from "reactstrap";
  import { useState } from "react";
  
  import logo from "../Resources/Images/logo.png";
  import { Link } from "react-router-dom";
  
  const TestOffcanvas = () => {
    const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  
    const toggleOffcanvas = () => {
      setOffcanvasOpen(!offcanvasOpen);
    };
  
    const [openMenu, setOpenMenu] = useState(null);
  
    const toggle = (menuIndex) => {
      if (openMenu === menuIndex) {
        setOpenMenu(null); // Fechar o menu se ele já estiver aberto
      } else {
        setOpenMenu(menuIndex); // Abrir o menu
      }
    };
  
    return (
      <div>
        <Navbar fixed="top" color="light" light>
          <NavbarBrand>
            <img
              alt="logo"
              src={logo}
              onClick={toggleOffcanvas}
              style={{
                height: 40,
                width: 40,
                cursor: "pointer",
              }}
            />
          </NavbarBrand>
          <NavItem>
            <h5>Guia Santa Rita do Sapucaí</h5>
          </NavItem>
          <NavbarText> E. E. Dr. Delfim Moreira</NavbarText>
        </Navbar>
        <Offcanvas isOpen={offcanvasOpen} toggle={toggleOffcanvas} direction="start">
          <OffcanvasHeader toggle={toggleOffcanvas}>Menu de Navegação</OffcanvasHeader>
          <OffcanvasBody>
            <Container fluid style={{ paddingTop: 10, paddingBottom: 10 }}>
              <Row style={{ padding: 10 }}>
                <Button color="primary" onClick={() => toggle(1)} className="mb-2">
                  Períodos Festivos e Eventos da Cidade
                </Button>
  
                <Collapse style={{ padding: 20 }} isOpen={openMenu === 1}>
                  <Card>
                    <CardBody>
                      <Row className="justify-content-center">
                        <Col md="auto">
                          <Row>
                            <Button
                              color="primary"
                              onClick={() => alert("Em Construção =)")}
                              className="mb-2"
                            >
                              Festa de Santa Rita
                            </Button>
                            <Button
                              tag={Link}
                              to="/Eventos/Hacktown"
                              color="primary"
                              className="mb-2"
                            >
                              HackTown
                            </Button>
                            <Button
                              tag={Link}
                              to="/Eventos/Projete"
                              color="primary"
                              className="mb-2"
                            >
                              Projete
                            </Button>
                          </Row>
                        </Col>
                        <Col md="auto">
                          <Row>
                            <Button
                              tag={Link}
                              to="/Eventos/FeiraOportunidades"
                              color="primary"
                              className="mb-2"
                            >
                              Feira de Oportunidades
                            </Button>
                            <Button
                              tag={Link}
                              to="/Eventos/Fetin"
                              color="primary"
                              className="mb-2"
                            >
                              Fetin
                            </Button>
                            <Button
                              tag={Link}
                              to="/Eventos/Floydianos"
                              color="primary"
                              className="mb-2"
                            >
                              Floydianos
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </Row>
  
              <Row style={{ padding: 10 }}>
                <Button color="primary" onClick={() => toggle(2)} className="mb-2">
                  Circuito de Bares e Restaurantes
                </Button>
  
                <Collapse style={{ padding: 20 }} isOpen={openMenu === 2}>
                  <Card>
                    
                    <CardBody>
                      <Row className="justify-content-center">
                        <Col md="auto">
                          <Row>
                            <Button
                              tag={Link}
                              to="/Gastronomia/Roteiro"
                              color="primary"
                              className="mb-2"
                            >
                              Roteiro Gastronômico
                            </Button>
                            <Button
                              color="primary"
                              onClick={() => alert("Em Construção =)")}
                              className="mb-2"
                            >
                              Roteiro de Bares e Butecos
                            </Button>
                            <Button
                              color="primary"
                              onClick={() => alert("Em Construção =)")}
                              className="mb-2"
                            >
                              Happy Hours
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </Row>
  
              <Row style={{ padding: 10 }}>
                <Button color="primary" onClick={() => toggle(3)} className="mb-2">
                  Turismo de Aventura
                </Button>
  
                <Collapse style={{ padding: 20 }} isOpen={openMenu === 3}>
                  <Card>
                    
                    <CardBody>
                      <Row className="justify-content-center">
                        <Col md="auto">
                          <Row>
                            <Button
                              tag={Link}
                              to="/TurismoAventura/Ciclismo"
                              color="primary"
                              className="mb-2"
                            >
                              Ciclismo
                            </Button>
                            <Button
                              color="primary"
                              onClick={() => alert("Em Construção =)")}
                              className="mb-2"
                            >
                              Corrida
                            </Button>
                            <Button
                              tag={Link}
                              to="/TurismoAventura/PraticasEsportivas"
                              color="primary"
                              className="mb-2"
                            >
                              Práticas Esportivas
                            </Button>
                          </Row>
                        </Col>
                        <Col md="auto">
                          <Row>
                            <Button
                              tag={Link}
                              to="/TurismoAventura/Trilha"
                              color="primary"
                              className="mb-2"
                            >
                              Trilhas
                            </Button>
                            <Button
                              tag={Link}
                              to="/TurismoAventura/Cachoeira"
                              color="primary"
                              className="mb-2"
                            >
                              Cachoeiras
                            </Button>
                            <Button
                              tag={Link}
                              to="/TurismoAventura/EsporteRadical"
                              color="primary"
                              className="mb-2"
                            >
                              Esportes Radicais
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </Row>
  
              <Row style={{ padding: 10 }}>
                <Button color="primary" onClick={() => toggle(4)} className="mb-2">
                  Circuito de Arte
                </Button>
  
                <Collapse style={{ padding: 20 }} isOpen={openMenu === 4}>
                  <Card>
                    
                    <CardBody>
                      <Row className="justify-content-center">
                        <Col md="auto">
                          <Row>
                            <Button
                              tag={Link}
                              to="/Artes/Grafites"
                              color="primary"
                              className="mb-2"
                            >
                              Grafites
                            </Button>
                            <Button
                              tag={Link}
                              to="/Artes/Monumentos"
                              color="primary"
                              className="mb-2"
                            >
                              Monumentos
                            </Button>
                            <Button
                              tag={Link}
                              to="/Artes/Museu"
                              color="primary"
                              className="mb-2"
                            >
                              Museu
                            </Button>
                          </Row>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </Row>
            </Container>
          </OffcanvasBody>
        </Offcanvas>
      </div>
    );
  };
  
  export default TestOffcanvas;
  