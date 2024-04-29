import {Accordion, Card, Container, ListGroup} from "react-bootstrap";

export function Talleres() {


    return (
        <>
            <Container>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/talleres2.webp" />
                    <Card.Body>
                        <Card.Title >
                            Talleres
                        </Card.Title>

                        <Card.Text>
                            Es importante destacar el hecho de que la Asociación cuenta con los siguientes talleres
                            <li>
                                Recuperación / reciclado de juguetes
                            </li>
                            <li>
                                Confección de prendas de lana y ropa en general.
                            </li>
                            <li>
                                Fabricación de juguetes para estimulación precoz.
                            </li>

                        </Card.Text>

                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
