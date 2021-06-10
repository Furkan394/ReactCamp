import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

export default function CartSummary() { //as to ile router işlemi yaptık (router link)
    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    <Dropdown.Item>Monster Laptop</Dropdown.Item>
                    <Dropdown.Item>Asus Laptop</Dropdown.Item>
                    <Dropdown.Item>MSI Laptop</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart" >Sepete Git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
