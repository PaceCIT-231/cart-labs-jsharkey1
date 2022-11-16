let currentPrice=0, itemCount=0

function addToCart(cookie) {
    if (cookie == "chocolate chip") {
        currentPrice = 25 + currentPrice
    } else if (cookie == "party press") {
        currentPrice = 35 + currentPrice
    } else if (cookie == "peanut butter") {
        currentPrice = 20 + currentPrice
    } else if (cookie == "sandies") {
        currentPrice = 30 + currentPrice
    }
   
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 
    
   //add 1 to the itemCount variable
   //add the correct price to the currentPrice variable
    itemCount++
}

function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    console.log('You have in your cart ', itemCount, ' items. The grand total is $', currentPrice)
}