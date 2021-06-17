import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function CartSummary() { //as to ile router işlemi yaptık (router link)

    const {cartItems} = useSelector(state => state.cart) //redux için useSelector ile reducer'a ulaşıyor

    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem)=>(
                            <Dropdown.Item>
                                {cartItem.product.productName}
                                <Label>
                                    {cartItems.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart" >Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
