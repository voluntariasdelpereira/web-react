import {Col, Container, Row, Image} from "react-bootstrap";
import React from "react";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
} from 'mdb-react-ui-kit';
export function MyFotos() {


    return (
        <>
            <Container fluid="lg">
                <h4>Galeria</h4>
                <MDBRow>
                    <MDBCol lg={4} md={12} className='mb-4 mb-lg-0'>
                        <img
                            src='https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/fotos01.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='foto 1'
                        />

                        <img
                            src='https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/fotos02.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='foto 2'
                        />

                        <img
                            src='https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/fotos03.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='foto 3'
                        />
                    </MDBCol>

                    <MDBCol lg={4} className='mb-4 mb-lg-0'>
                        <img
                            src='https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/fotos04.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='foto 4'
                        />

                        <img
                            src='https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/fotos05.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='foto 5'
                        />

                        <img
                            src='https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/fotos06.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='foto 6'
                        />

                    </MDBCol>

                    <MDBCol lg={4} className='mb-4 mb-lg-0'>
                        <img
                            src='https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/fotos07.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='foto 7'
                        />

                        <img
                            src='https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/fotos07.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='foto 8'
                        />

                        <img
                            src='https://raw.githubusercontent.com/voluntariasdelpereira/web-react/main/src/assets/fotos07.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='foto 9'
                        />
                    </MDBCol>
                </MDBRow>
            </Container>
        </>
    )
}
