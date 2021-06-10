import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'

export default function Navi() {

    const [isAuthenticated, setIsAuthenticated] = useState(false) //initialState - authun defaultu ya true ya false olmalıdır

    const history = useHistory()
    function handleSignOut() { //state i navide yazdık --- alt componente fonksiyon yollayacağız
        setIsAuthenticated(false)
        history.push("/") //çıkış yapınca anasayfaya dönmek için
    }

    function handleSignIn() {
        setIsAuthenticated(true)
    }


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
                    {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}   
                </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
