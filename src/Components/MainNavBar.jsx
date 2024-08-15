import { useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Collapse, Container, Label, Nav, NavItem, Row } from "reactstrap";







const MainNavBar = () => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggle = (menuIndex) => {
        if (openMenu === menuIndex) {
            setOpenMenu(null); // Fechar o menu se ele já estiver aberto
        } else {
            setOpenMenu(menuIndex); // Abrir o menu
        }
    };

    return (
        <Container fluid style={{paddingTop: 10, paddingBottom: 10}}>
            <Card body>


                <Nav fill justified>
                    <NavItem>
                        <Button color="primary" onClick={() => toggle(1)}>Períodos Festivos e Eventos da Cidade</Button>
                    </NavItem>
                    <NavItem>
                        <Button color="primary" onClick={() => toggle(2)}>Circuito de Bares e Restaurantes</Button>
                    </NavItem>

                    <NavItem>
                        <Button color="primary" onClick={() => toggle(3)}>Turismo de Aventura</Button>
                    </NavItem>
                    <NavItem>
                        <Button color="primary" onClick={() => toggle(4)}>Circuito de Arte</Button>
                    </NavItem>
                </Nav>
                <Collapse style={{ padding: 20 }} isOpen={openMenu === 1} >
                    <Card >
                        <CardHeader> Períodos Festivos e Eventos da Cidade </CardHeader>
                        <CardBody >
                            <Row className="justify-content-center">
                                <Col md="auto">
                                    <Row>
                                        <Label>Festa de Santa Rita</Label>
                                        <Label>HackTown</Label>
                                        <Label>Festas Juninas Escolares</Label>
                                    </Row>


                                </Col>
                                <Col md="auto">
                                    <Row>
                                        <Label>Festa de Santa Rita</Label>
                                        <Label>HackTown</Label>
                                        <Label>Festas Juninas Escolares</Label>
                                    </Row>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Collapse>
                <Collapse style={{ padding: 20 }} isOpen={openMenu === 2} >
                    <Card >
                        <CardHeader>Circuito de Bares e Restaurantes</CardHeader>
                        <CardBody >
                            <Row className="justify-content-center">
                                <Col md="auto">
                                    <Row>
                                        <Label>Roteiro Gastronômico</Label>
                                        <Label>Roteiro de Bares e Butecos</Label>
                                        <Label>Happy Hours</Label>
                                    </Row>


                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Collapse>
                <Collapse style={{ padding: 20 }} isOpen={openMenu === 3} >
                    <Card >
                        <CardHeader>Turismo de Aventura</CardHeader>
                        <CardBody >
                            <Row className="justify-content-center">
                                <Col md="auto">
                                    <Row>
                                        <Label>Ciclismo</Label>
                                        <Label>Corrida</Label>
                                        <Label>Praticas Esportivas</Label>
                                    </Row>


                                </Col>
                                <Col md="auto">
                                    <Row>
                                        <Label>Trilhas</Label>
                                        <Label>Caichoeiras</Label>
                                        <Label>Esportes Radicais</Label>
                                    </Row>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Collapse>
                <Collapse style={{ padding: 20 }} isOpen={openMenu === 4} >
                    <Card >
                        <CardHeader  >Circuito de Arte</CardHeader>
                        <CardBody >
                            <Row className="justify-content-center">
                                <Col md="auto">
                                    <Row>
                                        <Label>Grafites</Label>
                                        <Label>Monumentos</Label>
                                        <Label>Museu</Label>
                                    </Row>


                                </Col>

                            </Row>
                        </CardBody>
                    </Card>
                </Collapse>
            </Card>
        </Container>

    );
};

export default MainNavBar;
