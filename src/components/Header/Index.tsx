import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProperties{
    OnOpenNewTransactionModal: () => void;
}

export function Header(properties: HeaderProperties){

    return(
        <Container>
            <Content>
                <img src={logoImg} alt="dt-money" />
                <button onClick={properties.OnOpenNewTransactionModal}>Nova Transaçao</button>
            
                
            </Content>
        </Container>
    )
}