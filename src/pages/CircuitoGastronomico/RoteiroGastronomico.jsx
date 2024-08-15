import React from "react";
import { Card, CardBody, CardHeader, CardSubtitle, CardTitle, Container, Table } from "reactstrap";
import data from "../../Resources/Data/Restaurantes.json";

const RoteiroGastronomico = () => {
  // Função para renderizar os cards
  const renderCards = () => {
    return data.map((restaurante, index) => (
      <Card key={index} style={{ marginBottom: "20px" }}>
        <CardHeader>{restaurante.nome}</CardHeader>
        <CardBody>
          <CardTitle>{restaurante.endereco}</CardTitle>
         
          <Table responsive bordered size="sm" style={{ marginTop: "10px" }}>
            <thead>
              <tr>
                <th>Dia da Semana</th>
                <th>Horário de Funcionamento</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(restaurante.horario_de_funcionamento).map(([dia, horario], i) => (
                <tr key={i}>
                  <td>{dia.charAt(0).toUpperCase() + dia.slice(1)}</td>
                  <td>{horario}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <CardSubtitle>
            Contato: {restaurante.contato}
          </CardSubtitle>
        </CardBody>
      </Card>
    ));
  };

  return <Container fluid>{renderCards()}</Container>;
};

export default RoteiroGastronomico;
