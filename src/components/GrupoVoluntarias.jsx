import {Accordion, Card, Container, ListGroup} from "react-bootstrap";

export function GrupoVoluntarias() {


    return (
        <>
            <Container>

                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="src/assets/voluntarias.webp" />
                    <Card.Body>
                        <Card.Title >
                            Grupo de Voluntarias
                        </Card.Title>

                        <Card.Text>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>
                                        En la actualidad cuenta con más de sesensa voluntarias activas, las que tienen un promedio de diez años desempeñando este tipo de actividad. Queremos puntualizar que las mismas no realizan ningún tipo de trabajo técnico.</Accordion.Header>
                                    <Accordion.Body>
                                        <strong>Requisitos para ingresar al grupo de voluntarias</strong>
                                        <br/><br/>
                                        <li>
                                            Tener más de 30 años de edad y un máximo de 65 años.
                                        </li>
                                        <li>
                                            Los postulantes deberán concurrir a dos entrevistas, una explicativa con las voluntarias, y
                                            otra técnica con una psicóloga.
                                        </li>
                                        <li>
                                            De acuerdo a esta información será citada para un período de prueba de 3 meses de
                                            duración.
                                        </li>
                                        <br/>
                                        Las futuras voluntarias deberán aceptar las pautas de organización y trabajo establecidas, lo que garantiza el correcto funcionamiento del grupo.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
