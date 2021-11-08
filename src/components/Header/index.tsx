import React from 'react'
import { Container, Content } from './styled'

import logo from "../../assets/logo.svg"
import dtmoney from "../../assets/dt money.svg"

export  function Header() {
    return (
        <Container>
            <Content>
                <div>
                <img src={logo} alt="logo" />
                </div>

                <button>
                    Nova Transação
                </button>
            </Content>
        </Container>
    )
}
 