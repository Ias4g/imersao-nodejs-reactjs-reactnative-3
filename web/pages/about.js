import Head from 'next/head'
import { Container, Jumbotron } from 'reactstrap'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

function About() {
    return (
        <>
            <Head>
                <title>About - by SILVA, IZAEL. A.</title>
                <meta name="author" content="SILVA, IZAEL. A." />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Love, Musics, Players, Games, let`s play the game" />
                <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </Head>

            <Menu />

            <Jumbotron fluid className="about-top">
                <Container className="text-center">
                    <h1 className="display-4">Sobre</h1>
                </Container>
            </Jumbotron>

            <Footer />
        </>
    )
}

export default About