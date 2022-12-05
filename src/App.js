import './App.css';
import React from "react";
// contains bakery data and npasses each bakery item to the BakeryItem component

import Navigation from './components/Navigation';
import ShopItem from './components/ShopItem';
import menuData from './menu-data.json';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
menuData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [sortBy, setSort] = React.useState("none");
  const [categorizeBy, setCategory] = React.useState("All");
  const [filterList, setFilters] = React.useState([]);


  const sortItems = () =>{
    if (sortBy === "price"){
      filteredData.sort((a,b) => {
        return a.price - b.price;
      })
    } else if (sortBy === "calories"){
      filteredData.sort((a,b) => {
        return a.calories - b.calories;
      })
    }
  }

  const categorizeItems = (item) =>{
    if (categorizeBy === "All"){
      return true;
    } else if (categorizeBy === item.category) {
      // menuData.filter((item) => {
      //   return item.category === categorizeBy;
      // });
      return true;
    } else {
      return false;
    }
    
  }

  const matchesFilterType = (item) => {
    if (filterList.length === 0){ // it contains only "All"
      return true;
    } else { 
      for (var i = 0; i < filterList.length; i++){
        if (!item.description.includes(filterList[i])){
          return false;
        } 
      }
      return true;
    }
  }

  const categorizedData = menuData.filter(categorizeItems);
  const filteredData = categorizedData.filter(matchesFilterType);


  const [cartDict, setCartDict] = React.useState({}); // maps name --> count
  const [priceDict, setPriceDict] = React.useState({}); // maps name --> one unit price
  const [totalPrice, setPrice] = React.useState(0);

  const addToPriceDict = (item, price) => {
    // creates a new item that maps to its price
    priceDict[item] = price;
  }

  const addToCart = (item) => {
    setPrice(totalPrice + priceDict[item]);

    const newCart = {...cartDict};
    newCart[item] = (newCart[item] || 0) + 1;
    setCartDict(newCart); 
  }

  
  const removeFromCart = (item) => {
    // removes from totalPrice with number of items*price
    setPrice(totalPrice - cartDict[item]*priceDict[item]);

    // removes item from cart entirely
    const newCart = {...cartDict};
    delete newCart[item]; 
    setCartDict(newCart);
  }

  const subtractFromCart = (item) => {
    // removes from totalPrice with number of items*price
    setPrice(totalPrice - priceDict[item]);

    cartDict[item] = (cartDict[item] - 1);
    if (cartDict[item] === 0){
      delete cartDict[item];
    }
 
  }

  return (
    <div className="body">
      <div className="header">
        <img src="bearkery.png" style={{maxHeight: '100%'}}></img>
      </div>
      <div className="main-container">
        <div className="navigation">
          <Navigation sortBy={sortBy} 
          setSort={setSort}
          setCategory={setCategory} 
          filterList={filterList} 
          setFilters={setFilters}
          cartDict = {cartDict} 
          totalPrice = {totalPrice}
          addToCart = {addToCart}
          subtractFromCart = {subtractFromCart}/>
        </div>
        <div className="menu-container">
          
          {sortItems()}

          {filteredData.map((item) => (
            <ShopItem item={item}
                      addToCart = {addToCart}
                      addToPriceDict = {addToPriceDict}
                      priceDict = {priceDict}
                      removeFromCart = {removeFromCart}
                      setPrice = {setPrice}
                      totalPrice = {totalPrice}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
