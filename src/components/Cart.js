import * as React from 'react';
import CartItem from './CartItem';

import{
  Box,
  FormLabel,
} from '@mui/material';




export default function Cart(props) {
    //const cartData = props.cartData;
    const cartDict = props.cartDict;
    const totalPrice = props.totalPrice;

    return (
        <div>
        <Box sx={{ width: '100%', 
            minHeight: 200,
            bgcolor: 'white',
            borderRadius: 8,
            border: 3, 
            borderColor: 'grey.300',
            textAlign: 'center',
            padding: 1,
            py: 2}}>
            
            <h2>My Cart</h2><br></br>

            <div>
            {Object.entries(cartDict).map((key) => 
                <CartItem 
                name={key[0]} 
                count={key[1]}
                addToCart={props.addToCart}
                subtractFromCart={props.subtractFromCart}/>
            )}
            </div>

            <br></br>
            <FormLabel id="favorites">Price</FormLabel><br></br>
            <h3>${totalPrice.toFixed(2)}</h3>
            </Box>
        </div>
    );
}

