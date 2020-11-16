import React from 'react'

import { Container, Jumbotron } from 'reactstrap'

const Footer = () => {
    return (
        <Jumbotron fluid className="footer">
            <Container className="text-center">
                <h2 className="lead">Rodapé</h2>
            </Container>
        </Jumbotron>
    )
}

export default Footer