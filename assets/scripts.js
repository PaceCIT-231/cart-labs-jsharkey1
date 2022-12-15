const cart = {
    currentPrice: 0,
    items: [],
    addItem: function(cookie, price) {
        // add a cookie (string) to the items array
        this.items.push(cookie);
        //add the price (number) to the currentPrice properties
        this.currentPrice = price + this.currentPrice;
    },
    clear: function() {
        //reset the currentPrice and items properties
        this.currentPrice = 0;
        this.items = [];
    },
    // copy this method!
    getSummary: function() {
        let summary = `<p>Number of Items: ${this.items.length}</p>
            <h4>Details</h4>
            <p>${this.items.join('<br>')}</p>
            <p>Total Price: $${this.currentPrice}</p>`
        return summary
    },
}

function addToCart(cookie) {
    if (cookie == "chocolate chip") {
        cart.addItem(cookie, 25)
    } else if (cookie == "party press") {
        cart.addItem(cookie, 35)
    } else if (cookie == "peanut butter") {
        cart.addItem(cookie, 20)
    } else if (cookie == "sandies") {
        cart.addItem(cookie, 30)
    }
   
   console.log('The user is adding this type of cookie to their cart: ' , cookie) 
    let cartItems = document.getElementById('cartItems')
   //add 1 to the itemCount variable
   //add the correct price to the currentPrice variable
    cartItems.innerText = cart.items.length

    let hoverText = document.querySelector('.hoverText')
    hoverText.innerText = cart.currentPrice; 
    
}

console.log(cart)

function checkout() {
    console.log('User is checking out.')
    //Let your customer know how many items they are purchasing and the price
    console.log('You have in your cart ', cart.items.length, ' items. The grand total is $', cart.currentPrice)
    
    document.getElementById('summary-body').innerHTML = cart.getSummary()
    document.getElementById('summary').style.display = "block"
    
    let hoverText = document.querySelector('.hoverText')
    hoverText.innerText = "$0"
    
    cart.clear() 
        let cartItems = document.getElementById('cartItems')
        cartItems.innerText = cart.items.length
    
}

function cartclear() {
    cart.clear()
        let cartItems = document.getElementById('cartItems')
        cartItems.innerText = cart.items.length
        let hoverText = document.querySelector('.hoverText')
        hoverText.innerText = "$0"
}

function darkMode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
} 