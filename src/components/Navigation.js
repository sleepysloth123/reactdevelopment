import * as React from 'react';
import Cart from './Cart';

import{
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Checkbox
} from '@mui/material';

export default function Navigation(props) {
  const filterList = props.filterList;
  
  const handleSortChange = (event) =>{
    props.setSort(event.target.value);
  }

  const handleCategoryChange = (event) =>{
    props.setCategory(event.target.value);
  }

  const handleFilterChecked = (event) =>{
    if (event.target.checked === true){
      props.setFilters([...filterList, event.target.value]);
    } else {
      const updatedFilters = filterList.filter((filterName) => {
        return filterName !== event.target.value;
      })
      props.setFilters(updatedFilters);
    }
  }

  return (
    <div>
    <Box sx={{ width: '100%', 
                bgcolor: 'white',
                borderRadius: 8,
                border: 3, borderColor: 'grey.300'}}>
        <FormControl
          sx={{
            padding: 3
          }}>
          <FormLabel id="sort">Sort By</FormLabel>
          <RadioGroup
            
            >
              <FormControlLabel value="price" 
                control={<Radio onChange={handleSortChange}/>}
                label="Price"/>
              <FormControlLabel value="calories" 
                control={<Radio onChange={handleSortChange}/>}
                label="Calories"/>  
          </RadioGroup>
        </FormControl>

        <FormControl
          sx={{
            padding: 3
          }}>
          <FormLabel id="category">Categorize By</FormLabel>
          <RadioGroup
            onChange={handleCategoryChange}
            >
              <FormControlLabel value="All" 
                control={<Radio/>}
                label="All"/>
              <FormControlLabel value="Macarons" 
                control={<Radio/>}
                label="Macarons"/>
              <FormControlLabel value="Cookies" 
                control={<Radio/>}
                label="Cookies"/>  
              <FormControlLabel value="Cakes" 
                control={<Radio/>}
                label="Cakes"/>  
          </RadioGroup>
        </FormControl>

        <FormGroup sx={{padding: 3}}>
          <FormLabel id="filter">Filter By</FormLabel>
          <FormControlLabel value="Dairy-free"
            control={<Checkbox
                        onChange={handleFilterChecked}
                      />} 
            label="Dairy-Free"/>
          <FormControlLabel value="Nut-free"
            control={<Checkbox
                        onChange={handleFilterChecked}
                        />} 
            label="Nut-Free"/>
          <FormControlLabel value="Gluten-free"
            control={<Checkbox
                          onChange={handleFilterChecked}
                        />}  
            label="Gluten-Free"/>
        </FormGroup>
    </Box><br></br><br></br>
    
    <Cart cartDict = {props.cartDict} 
          totalPrice = {props.totalPrice}
          addToCart = {props.addToCart}
          subtractFromCart = {props.subtractFromCart}/>
    </div>
  );
}

