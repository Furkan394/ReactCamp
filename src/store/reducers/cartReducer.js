import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(p => p.product.id === payload.id)
            if (product) {
                product.quantity++;
                return {
                    ...state //elemanları ayırarak yeni bir obje oluşturuyor (newlemek gibi)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }] //yeni bir array ile yeni referans oluşturdu
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((c) => c.product.id !== payload.id) //sepetteki örneğin 3 nolu idyi filtrele ve onu  almadan    yeni bir array oluştur. Bu sayede 3'ü silmiş olduk.
            }
        default:
            return state;
    }
}