import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";

const Cidade = () => {
    return (
        <Container fluid style={{ paddingTop: 10 }}>
            <Card>
                <CardHeader>A Cidade</CardHeader>
                <CardBody>
                    <Row style={{ justifyContent: "center", textAlign: "center", marginBottom: "20px" }}>
                        <Col
                            md={{
                                offset: 1,
                                size: 6
                            }}
                            sm="12"
                        >
                            <h1>A Cidade de Santa Rita do Sapucaí</h1>
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center" }}>
                        <Col
                            
                        >
                            <p style={{ textIndent: "2em" }}>
                                Santa Rita do Sapucaí, carinhosamente conhecida como "O Vale da Eletrônica", é uma cidade que encanta tanto pela sua história rica quanto pelo seu espírito inovador. Localizada no coração do Sul de Minas Gerais, essa acolhedora cidade se destaca não apenas por suas tradições mineiras, mas também por ser um importante polo tecnológico e educacional no Brasil.
                            </p>

                            <p style={{ textIndent: "2em" }}>
                                Fundada em 24 de maio de 1892, Santa Rita do Sapucaí tem suas raízes fincadas em uma história de fé e devoção, em torno da Santa Rita de Cássia, padroeira da cidade. Desde seus primeiros dias, a cidade sempre foi marcada por um forte senso de comunidade e solidariedade, características que se mantêm até hoje.
                            </p>

                            <p style={{ textIndent: "2em" }}>
                                Com o tempo, Santa Rita do Sapucaí evoluiu, mas sem perder o charme de uma típica cidade mineira, com suas montanhas verdejantes, ruas tranquilas e uma hospitalidade que faz qualquer visitante se sentir em casa. Ao mesmo tempo, é impressionante como essa cidade soube se transformar, tornando-se um exemplo de como tradição e modernidade podem coexistir harmoniosamente.
                            </p>

                            <p style={{ textIndent: "2em" }}>
                                O município é internacionalmente reconhecido pelo seu desenvolvimento na área de tecnologia e inovação, sendo sede de diversas instituições de ensino que formam profissionais altamente capacitados. Este dinamismo tecnológico, aliado à qualidade de vida e às belezas naturais da região, fazem de Santa Rita do Sapucaí um destino imperdível para quem busca conhecimento, tranquilidade e uma experiência genuinamente mineira.
                            </p>

                            <p style={{ textIndent: "2em" }}>
                                Seja para explorar suas tradições, conhecer a vibrante cena tecnológica ou simplesmente desfrutar de uma boa prosa mineira, Santa Rita do Sapucaí é um lugar que cativa o coração e deixa uma marca inesquecível em todos que a visitam.
                            </p>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </Container>
    );
};

export default Cidade;
