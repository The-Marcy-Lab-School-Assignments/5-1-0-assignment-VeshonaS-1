import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  id = getId()
 static #cartItems = []
  static ShoppingCart 

  createItem( name , price ){
    this.name = name 
    this.price = price 
    ShoppingCart.#cartItems.push(this)
  }
  getItems(){
  
  }
 
}

export default ShoppingCart;