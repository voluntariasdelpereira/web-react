import {Card, Container, ListGroup} from "react-bootstrap";

export function Objetivo() {


    return (
        <>
            <Container>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/objectivo.webp" />
                    <Card.Body>
                        <Card.Title >
                            Objetivo
                        </Card.Title>

                        <ListGroup variant="flush">
                            <ListGroup.Item></ListGroup.Item>
                            <ListGroup.Item>El objetivo de la asociación es asistir a todos los niños internados y a sus acompañantes para lograr que su estadía sea más amena y confortable. Para ello recorremos todos los pisos de internación pediátrica ofreciendo un servicio de secado de ropa y repartiendo todo lo necesario en cada caso, toallas, artículos de higiene, ropa y juguetes.</ListGroup.Item>
                            <ListGroup.Item>El cariño y el apoyo moral es muy importante para sobrellevar los momentos difíciles viven los pequeños internados y sus padres.</ListGroup.Item>
                            <ListGroup.Item>En muchos casos estos pacientes no cuentan con familiares que puedan cubrir sus necesidades básicas y es más difícil para pacientes del interior de país.</ListGroup.Item>

                        </ListGroup>

                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
