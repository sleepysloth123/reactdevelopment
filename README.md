# Development

### Link to Deployed Website
If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application
The goal of my application is a bakery online ordering site. It allows users
to add items to cart, remove items completely, or increment the number of items
in their cart to be lesser or greater. 

Users can also filter by dietary restrictions and food type (macarons, cookies,
cakes), as well as sort by price or calories. This allows users to quickly find
the items that match their criterias. 

### Usability Principles Considered

I chose to follow the format of the ta example site since I thought it was very
intuitive and usable. In each item card, I have an "add" and "remove" button
that either adds an item to a cart, and if pressed again will add another count
to that item, or removes it completely. When the item is not yet in the cart, 
the only button that is shown is the "add" button. As soon as the item is added
to the cart, the remove button will appear. This also allows users to know 
which items are already in their cart at a quick glance when scanning all the 
menu items. 

In the cart, there are also plus and minus buttons for each item that allows
users to quickly change the number they wish to buy. If they press the minus
button all the way to zero, the item is then completely removed from the cart. 

Both the navigation/sort/filter section and cart box are on the same side and is
the first thing that users will see if they look left--> right. 

### Organization of Components

I have three main components: Navigation (filter/sort sidebar), Cart (aggregator)
Cart Item (for styling each item in the cart),
and ShopItem (item info and cards). App.js contains all of these components
in its return() method, which renders the components to the DOM. Cart is contained
inside Navigation, as it uses the same styling, but I chose to seperate Cart into
its own component as it handles aggregation seperately from the way Navigation
handles sorting and filtering. 

### How Data is Passed Down Through Components

Items, price count, and adding/removing from cart are passed into ShopItem 
component through props. Some data like adding/removing from cart are passed both into
ShopItem, to know which item to add and how many there are, as well as to CartItem
and Cart, in order to render those items to the DOM. 

On the other hand, setting Filters and setting Sorts is passed and used in 
Navigation so that App.js knows which filters/sorts is activated. Because data
in passed through Navigation into Cart as well as CartItem, App.js shows
many more props being passed into Navigation that aren't directly used inside
Navigation.

### How the User Triggers State Changes

The user triggers state changes mainly through pressing buttons. 

1. Add/remove in ShopItem: 
    This triggers/sets a boolean (with useState) that decides whether the item
    is currently in the cart or not, and thus calls on different methods that
    either increment the amount in the cart, adds to the cart for the first time,
    or removes from the cart completely. 

2. Plus/Minus in CartItem:
    This calls App.js to either subtract or increase the amount of that specific
    item in cart. Both of these methods in App.js sets the totalPrice to be the
    updated amount, as well as updates the cart Dictionary with the new amount. 

3. Sort and Category buttons:
    Because each button is associated with a value, I called setSort and setCategory
    in order to update the current state of the sort and category variables
    inside App.js. I then update the menuData according to these variables via
    sorting or filtering.

4. Filter checkboxes:
    Similarly, each checkbox is associated with a filter value. Each time a checkbox
    is selected or unselected, I set the state of the filterList inside App.js
    so that I can maintain a list of all the filters that are currenlty activated. 
    Finally, I render the final data (after sorting and categorized) according
    to the filtered Data. 

