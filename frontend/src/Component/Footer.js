import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer>
            <Container >
                <Row className='text-center'>
                    <Col sm='12'>
                        Copyright &copy; DSProShop 2020
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
