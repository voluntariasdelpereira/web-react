import {Card, Container} from "react-bootstrap";

export function Colaboraciones() {


    return (
        <>
            <Container>

                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="src/assets/voluntarias2.webp" />
                    <Card.Body>
                        <Card.Title >
                            Colaboraciones
                        </Card.Title>

                        <Card.Text>

                            <p>
                                Puede colaborar a través de donaciones de:
                                Ropa nueva o usada de niños como de adultos, juguetes, toallas, sábanas, calzado, colchones, muebles, pañales, material didáctico, cochecitos de bebé nuevos o usados, y que nosotros prestamos o en algunos casos donamos para que se lleven a sus hogares, para chicos como por ejemplo con parálisis cerebral, sillas de ruedas,  andadores y todo material que considere de utilidad.
                            </p>

                            <h4>
                                Donaciones personales
                            </h4>
                            <p>
                                Pabellón Oteiza, Hospital Pereira Rossell (Br. Artigas 1550)
                            </p>

                            <h4>
                                Donaciones Bancarias
                            </h4>
                            <p>
                                BROU
                                <br/>
                                <li>Moneda Nacional Num. 001928112-0001
                                </li>
                                <li>
                                    Dolares Num.  001928112-0002
                                </li>
                            </p>
                            <p>
                                Si desea colaborar de otra forma, por favor comuníquese con nosotros a los datos de contacto.
                            </p>

                            <p>
                                <strong>TODA DONACIÓN SERÁ MUY BIENVENIDA Y AGRADECIDA POR EL VOLUNTARIADO, PERO SOBRE TODO POR LOS DESTINATARIOS QUE EN ESTE CASO SON LOS NIÑOS DE NUESTRO PAÍS.</strong>
                            </p>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}
