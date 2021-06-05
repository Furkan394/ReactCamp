import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'

export default function Navi() {
    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                <Menu.Item
                    name='Anasayfa'
                />
                <Menu.Item
                    name='Siparişlerim'
                />

                <Menu.Menu position='right'>
                    <CartSummary/>

                    <Menu.Item>
                        <Button primary>Giriş Yap</Button>
                    </Menu.Item>
                </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
