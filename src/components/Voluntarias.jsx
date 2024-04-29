import {Accordion, Card, Container, ListGroup} from "react-bootstrap";

export function Voluntarias() {


    return (
        <>
            <Container>

                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src="https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/voluntarias2.webp" />
                    <Card.Body>
                        <Card.Title >
                            Voluntarias en el Hospital
                        </Card.Title>

                        <Card.Text>
                            <Accordion defaultActiveKey="0" flush>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Rutina</Accordion.Header>
                                    <Accordion.Body>
                                        El grupo de voluntarias trabaja durante todo el año de lunes a viernes de 8:30 a 17:00 horas,
                                        no interrumpiendo sus actividades tampoco en los meses de verano.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Servicio de atención al público</Accordion.Header>
                                    <Accordion.Body>
                                        Brindamos apoyo en piso directamente donde los chicos se encuentran internados y en
                                        algunas de las policlínicas y demás abajo mencionadas.
                                    </Accordion.Body>
                                </Accordion.Item>


                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Áreas donde se brindan servicios</Accordion.Header>
                                    <Accordion.Body>
                                        <li>
                                            Medicina A.B.C.
                                        </li>
                                        <li>
                                            Lactantes A.B.C.
                                        </li>
                                        <li>
                                            Infecto Contagiosos
                                        </li>
                                        <li>
                                            Cirugía
                                        </li>
                                        <li>
                                            CTI – Intermedio
                                        </li>
                                        <li>
                                            Oncología (interacción)
                                        </li>
                                        <li>
                                            Oncología – Hospital de día (Sala de juegos)
                                        </li>
                                        <li>
                                            Ortopedia
                                        </li>
                                        <li>
                                            Neuropediatria
                                        </li>
                                        <li>
                                            Otorrino
                                        </li>
                                        <li>
                                            Cabina de informes: se brinda asesoramiento al usuario en general (ubicación física,
                                            trámites, horarios, etc.).
                                        </li>
                                        <li>
                                            Policlínicas: pediatría general, neumología, oxígeno-dependientes, ortopedia.
                                        </li>
                                        <li>
                                            Sala de juegos R.X.
                                        </li>
                                        <li>
                                            Talleres de dibujo en cirugía
                                        </li>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Además ayudamos a</Accordion.Header>
                                    <Accordion.Body>
                                        <li>
                                            Retirar, clasificar y distribuir las donaciones recibidas (que usualmente incluyen ropa y artículos en general)
                                        </li>
                                        <li>
                                            Acompañar a donantes que quieren entregar personalmente las donaciones en su recorrida por los distintos servicios. Esto se hace previa autorización de la Dirección del Hospital en coordinación con las voluntarias.
                                        </li>
                                        <li>
                                            Organizar la presentación de espectáculos (títeres, magos, payasos, coros,etc.) que se llevan a cabo en el Hospital. Esto implica informar a los distintos sectores acerca del tipo de actividad, día y hora del mismo, así como también la responsabilidad por todo lo concerniente al apoyo logístico necesario para la realización de eventos
                                        </li>
                                        <li>
                                            Reparto de juguetes en las siguientes fechas : Navidad, Día de Reyes y Día del Niño.
                                        </li>
                                        <li>
                                            Compras de electrodomésticos y material diverso. Estas compras se realizan a fin de satisfacer pedidos concretos realizados por distintos servicios del Hospital, aspiradores pediátricos, lentes de receta, medidores de presión arterial, heladeras, estufas, ventiladores, cortinas y todo lo necesario que económicamente se pueda solventar y el Hospital no pueda hacerlo. Todo esto se hace previo pedido por escrito de la Dirección del Hospital.
                                        </li>
                                        <li>
                                            Apoyo financiero para cubrir el costo de locomoción de pacientes que están bajo tratamiento por lo cual no deben interrumpir su asistencia al centro hospitalario pero que no disponen de dinero para su traslado.  Este apoyo se brinda una vez que se recibe el correspondiente informe del asistente social.
                                        </li>
                                        <li>
                                            Servicio de secado de ropa. La Asociación dispone actualemente de diez secadoras y seis centrifugadoras, cuya compra e instalación corrió a cargo del grupo de voluntarias. Dicho equipamiento es operado exclusivamente por las voluntarias, y se hace con el fin de que como las salas se comparten a veces hasta con 5 camas, se pueda incentivar a la higiene, orden y costumbres del lavado de las prendas que tengan en uso diariamente de los niños y sus acompañantes.
                                        </li>
                                        <li>
                                            Para ello también proporcionamos toallas, jabones de tocador y jabones para el lavado de ropa.
                                        </li>

                                        <br/>
                                         Todos los gastos son solventados en gran parte con las ventas económicas realizadas todos los viernes del año menos los feriados, donde los “clientes” son los propios funcionarios del Hospital, padres y madres de los internados y otros externos. Los precios son a precios sumamente módicos.

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
