import {Accordion, Card, Container, ListGroup} from "react-bootstrap";

export function Eventos() {


    return (
        <>
            <Container>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="src/assets/eventos.webp" />
                    <Card.Body>
                        <Card.Title >
                            Eventos
                        </Card.Title>

                        <Card.Text>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Actividades con fines benéficos : Té - Show</Accordion.Header>
                                    <Accordion.Body>
                                        Esta es una actividad que se lleva a cabo una vez al año contándose siempre con una nutrida asistencia.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Venta económica</Accordion.Header>
                                    <Accordion.Body>

                                            Esta actividad se realiza una vez por semana, los días viernes y se hace gracias a la colaboración de la gente que dona ropa de adultos, nueva o usada en buen estado, muebles, adornos, electrodomésticos, etc.
                                            Como mencionamos antes, nos es de gran ayuda para solventar nuestra actividad.

                                        <br/>                <br/>
                                            La ropa que se vende es solo la de los adultos, que se encuentra en mejor estado, porque la donada para los niños se entrega en su totalidad a los chicos internados más necesitados.
                                            Parte de la ropa para adultos, se entrega a los adultos – acompañantes de los niños internados que la necesitan.

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
