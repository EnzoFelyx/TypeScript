import React, {
    useContext,
} from 'react';

import CartContext from './CartContext';

function App() {

    const { products } = useContext(CartContext);

    return (
        <ul>
            {products?.map(product => product.name)}
        </ul>
    )
}

export default App;
