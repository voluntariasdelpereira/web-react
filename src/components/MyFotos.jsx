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
                            src='src/assets/fotos01.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Boat on Calm Water'
                        />

                        <img
                            src='src/assets/fotos02.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Wintry Mountain Landscape'
                        />

                        <img
                            src='src/assets/fotos07.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Wintry Mountain Landscape'
                        />
                    </MDBCol>

                    <MDBCol lg={4} className='mb-4 mb-lg-0'>
                        <img
                            src='src/assets/fotos03.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Mountains in the Clouds'
                        />

                        <img
                            src='src/assets/fotos04.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Boat on Calm Water'
                        />

                        <img
                            src='src/assets/fotos07.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Wintry Mountain Landscape'
                        />

                    </MDBCol>

                    <MDBCol lg={4} className='mb-4 mb-lg-0'>
                        <img
                            src='src/assets/fotos05.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Waves at Sea'
                        />

                        <img
                            src='src/assets/fotos06.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Yosemite National Park'
                        />

                        <img
                            src='src/assets/fotos07.webp'
                            className='w-100 shadow-1-strong rounded mb-4'
                            alt='Wintry Mountain Landscape'
                        />
                    </MDBCol>
                </MDBRow>
            </Container>
        </>
    )
}
