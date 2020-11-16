import React, { useState } from 'react'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <div>
            <Navbar className="fixed-top" color="dark" dark expand="md">
                <Container>
                    {/* <NavbarBrand href="/">Home</NavbarBrand> */}
                    <NavbarBrand>LOGO</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Ínicio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/about">Sobre</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/contacts">Contatos</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu