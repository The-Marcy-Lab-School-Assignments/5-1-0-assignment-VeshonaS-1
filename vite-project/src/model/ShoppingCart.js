import getId from "../utils/getId";
import CartItem from "./CartItem";
/** FEEDBACK: You are missing the constructor function! You are on the right track! Look through the tests, what methods are you missing? */
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