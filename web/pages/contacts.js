import Head from 'next/head'
import React, { useState } from 'react'
import { Container, Form, FormGroup, Jumbotron, Input, Label, Button } from 'reactstrap'

import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Contacts() {
    const [formulary, setFormulary] = useState({
        name: '',
        email: '',
        subject: '',
        content: ''
    })

    const [response, setResponse] = useState({
        formSave: false,
        type: '',
        message: ''
    })

    const onChangeInput = e => setFormulary({
        ...formulary, [e.target.name]: e.target.value
    })

    async function sendContent(e) {
        e.preventDefault()
        setResponse({ formSave: true })
        try {
            const results = await fetch('http://localhost:3333/contacts', {
                method: 'POST',
                body: JSON.stringify(formulary),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const returnEnv = await results.json()
            if (returnEnv.error) {
                setResponse({
                    formSave: false,
                    type: 'error',
                    message: returnEnv.message
                })
            } else {
                setResponse({
                    formSave: false,
                    type: 'success',
                    message: returnEnv.message
                })
            }
        } catch (error) {
            setResponse({
                formSave: false,
                type: 'error',
                message: 'Error: dados não cadastrados, tente novamente...'
            })
        }
    }

    return (
        <>
            <Head>
                <title>Contacts - by SILVA, IZAEL. A.</title>
                <meta name="author" content="SILVA, IZAEL. A." />
                <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Love, Musics, Players, Games, let`s play the game" />
                <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </Head>

            <Menu />

            <Jumbotron fluid className="contacts-top">
                <Container className="text-center">
                    <h1 className="display-4">Contatos</h1>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="contacts-formulary">
                <Container>
                    {response.type === 'error' ?
                        <div className='alert alert-danger'>{response.message}</div> : ""
                    }
                    {response.type === 'success' ?
                        <div className='alert alert-success'>{response.message}</div> : ""
                    }
                    <Form onSubmit={sendContent}>
                        <FormGroup>
                            <Label htmlFor="name">Nome</Label>
                            <Input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nome completo"
                                onChange={onChangeInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Seu melhor email"
                                onChange={onChangeInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="subject">Assunto</Label>
                            <Input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Assunto do contato"
                                onChange={onChangeInput}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="content">Mensagem</Label>
                            <Input
                                type="textarea"
                                name="content"
                                id="content"
                                placeholder="Escreva sua mensagem"
                                onChange={onChangeInput}
                            />
                        </FormGroup>

                        {response.formSave
                            ? <Button type="submit" outline color="warning" disabled>Enviando...</Button>
                            : <Button type="submit" outline color="warning">Enviar</Button>
                        }
                    </Form>
                </Container>
            </Jumbotron>

            <Footer />
        </>
    )
}

export default Contacts