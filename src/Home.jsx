import {Button, Card, Container, ListGroup} from "react-bootstrap";

function Home() {


    return (
        <>
            <Container>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="src/assets/home3.webp" />
                    <Card.Body>
                        <Card.Title className="text-center">
                            Asociación Civil de Voluntarias de Ayuda a la Salud y al Centro Hospitalario Pereira Rossell
                        </Card.Title>

                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>Teléfonos : 2708 6522</ListGroup.Item>
                            <ListGroup.Item>Dirección : Pabellón Oteiza, Hospital Pereira Rossell (Br. Artigas 1550)</ListGroup.Item>
                            <ListGroup.Item>E-mail : voluntariaschpr@adinet.com.uy</ListGroup.Item>
                            <ListGroup.Item></ListGroup.Item>
                        </ListGroup>

                        <Card.Text>
                            <strong>
                                TODA DONACIÓN SERÁ MUY BIENVENIDA Y AGRADECIDA POR EL VOLUNTARIADO, PERO SOBRE TODO POR LOS DESTINATARIOS QUE EN ESTE CASO SON LOS NIÑOS DE NUESTRO PAÍS.
                            </strong>
                        </Card.Text>
                        <p>
                            Por más información sobre donaciones haga clic en Colaboraciones o consulte a nuestros teléfonos.
                        </p>
                        <Button variant="primary" href="/colaboraciones">Colaboraciones</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}

export default Home
