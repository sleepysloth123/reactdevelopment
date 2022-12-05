import * as React from 'react';

import{
    IconButton
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function CartItem(props) {
    const name = props.name;
    const count = props.count;
    const addToCart = props.addToCart;
    const subtractFromCart = props.subtractFromCart;

    const handleSubtract = () => {
        subtractFromCart(name);
    }

    const handleAdd = () => {
        addToCart(name);
    }

    return(
        <div>
            <h4>{name} 
            <IconButton
                onClick={handleAdd}>
                <AddCircleOutlineIcon
                fontSize="small"/>
            </IconButton>
            {count}
            <IconButton
                onClick={handleSubtract}>
                <RemoveCircleOutlineIcon
                fontSize="small"/>
            </IconButton>
            </h4>
        </div>

    );

}
