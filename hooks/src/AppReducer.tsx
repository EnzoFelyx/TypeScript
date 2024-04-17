import React, {
    useReducer,
} from 'react';

interface Cart {
    products: string[]
    shipping_value?: number;
}

type CartActionType = {
    type: 'ADD_PRODUCT' | 'REMOVE_PRODCUT'
}


function App() {

    const cart = useReducer(
        (state: Cart, action: CartActionType) => {
            switch (action.type) {
                case 'ADD_PRODUCT':
                    return {
                        ...state,
                        products: [...state.products, 'Produto Novo']
                    }
                    case 'REMOVE_PRODCUT':
                        return state;
                default:
                    return state;
            }
        },
        {
            products: ['asd'],
            shipping_value: 0,
        }
    )

}

export default App;
