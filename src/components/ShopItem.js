// contains the information to be displayed for each bakery item
import * as React from 'react';
import {
    Button,

} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import './StyleItem.css';

export default function ShopItem(props){
    const item = props.item;
    const addToCart = props.addToCart;
    const addToPriceDict = props.addToPriceDict;
    const removeFromCart = props.removeFromCart;
    const [inCart, setIsInCart] = React.useState(false);

    const handleAddButton = () => {
        addToPriceDict(item.name, item.price);
        addToCart(item.name);
        setIsInCart(!inCart);

        if (inCart === true){
            setIsInCart(true);
        } 
    }

    const handleRemoveButton = () => {
        removeFromCart(item.name);
        setIsInCart(false);
    }


    return (
        
        <div className="card-container">
            <div className="image">
                <img src={item.image}/>
            </div>
            <div className="content">
                <h3>{item.name}</h3>
                <div id="category">
                    Category: {item.category}<br></br>
                    {item.description}
                </div>
                <br></br><br></br>
                <div id="info"><b>${item.price}</b> | {item.calories} kcal</div>
                
                {item.popularity}
            </div>
            <div className="buttons">
                {/* ADD TO CART BUTTON */}
                <Button sx={{borderRadius: 2,
                        width: inCart ? "45%" : "85%"
                    }} 
                    onClick={handleAddButton}
                    color="primary"
                    variant="contained"
                    startIcon={<ShoppingCartIcon/>}>
                    Add
                </Button>

                    
                {/* REMOVE BUTTON */}
                <Button sx={{borderRadius: 2,
                        width: "40%",
                        display: inCart ? "" : "none"
                    }} 
                    onClick={handleRemoveButton}
                    color="secondary"
                    variant="outlined"
                    startIcon={<RemoveCircleOutlineIcon/>}>
                    Remove
                </Button>
            </div>
        </div>
    );
}