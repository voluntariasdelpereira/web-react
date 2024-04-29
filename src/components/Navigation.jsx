import {Container, Nav, Navbar} from "react-bootstrap";

export default function NavigationBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Voluntarias del Pereira</Navbar.Brand>

                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/">Inicio</Nav.Link>
                        <Nav.Link href="/objetivo">Objetivo</Nav.Link>
                        <Nav.Link href="/voluntarias">Voluntarias</Nav.Link>
                        <Nav.Link href="/talleres">Talleres</Nav.Link>
                        <Nav.Link href="/eventos">Eventos</Nav.Link>
                        <Nav.Link href="/fotos">Fotos</Nav.Link>
                        <Nav.Link href="/grupo_voluntarias">Grupo de Voluntarias</Nav.Link>
                        <Nav.Link href="/colaboraciones">Colaboraciones</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}