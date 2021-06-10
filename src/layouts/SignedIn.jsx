import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

export default function SignedIn({signOut}) { //props - navide SignedIn componentinde fonksiyon çağırdık buraya "props" diye geçtik
    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://media-exp1.licdn.com/dms/image/C4E03AQEkh0vyw4jAvw/profile-displayphoto-shrink_200_200/0/1610562044124?e=1628121600&v=beta&t=0D4rfq_QZA0jXs_8BPeJ3yQ-SPb_JI-JtaLj02GliEE"/>
                <Dropdown pointing="top left" text="Furkan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}
