import {Button, Card, Container, ListGroup} from "react-bootstrap";

function Home() {


    return (
        <>
            <Container>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/home3.webp" />
                    <Card.Body>
                        <Card.Title className="text-center">
                            Asociación Civil de Voluntarias de Ayuda a la Salud y al Centro Hospitalario Pereira Rossell
                        </Card.Title>

                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                    <path
                                        d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                                </svg>
                                Teléfonos : 2708 6522
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                                </svg>

                                Dirección : Pabellón Oteiza, Hospital Pereira Rossell (Br. Artigas 1550)</ListGroup.Item>
                            <ListGroup.Item>

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
                                </svg>

                                <a href="mailto:voluntariaschpr@adinet.com.uy">voluntariaschpr@adinet.com.uy</a></ListGroup.Item>
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
