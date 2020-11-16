import Head from 'next/head'
import { Container, Jumbotron } from 'reactstrap'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Home({ data }) {
    return (
        <>
            <Head>
                <title>Home - by SILVA, IZAEL. A.</title>
                <meta name="author" content="SILVA, IZAEL. A." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Love, Musics, Players, Games, let`s play the game" />
                <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </Head>

            <Menu />

            <Jumbotron fluid className="index-top">
                <Container className="text-center">
                    <h1 className="display-4">{data.home.topTitle}</h1>
                    <p className="lead">{data.home.topSubTitle}</p>
                    <p>
                        <a href={data.home.topLinkBtn} target="_blank" className="btn btn-outline-warning btn-lg">
                            {data.home.topTextBtn}
                        </a>
                    </p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="index-middle">
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">{data.home.middleTitle}</h2>
                        <p className="lead pb-4">{data.home.middleSubTitle}</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circle centralize">
                                <FontAwesomeIcon icon={data.home.middleOneIcon} />
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.middleOneTitle}</h2>
                            <span>{data.home.middleOneDescription}</span>
                        </div>

                        <div className="col-md-4">
                            <div className="rounded-circle circle centralize">
                                <FontAwesomeIcon icon={data.home.middleTwoIcon} />
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.middleTwoTitle}</h2>
                            <span>{data.home.middleTwoDescription}</span>
                        </div>

                        <div className="col-md-4">
                            <div className="rounded-circle circle centralize">
                                <FontAwesomeIcon icon={data.home.middleThreeIcon} />
                            </div>
                            <h2 className="mt-4 mb-4">{data.home.middleThreeTitle}</h2>
                            <span>{data.home.middleThreeDescription}</span>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:3333/content-home')
    const data = await response.json()
    return {
        props: {
            data
        }
    }
}

export default Home