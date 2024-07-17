import getId from "../utils/getId";
import CartItem from "./CartItem";
/** FEEDBACK: You are missing the constructor function! You are on the right track! Look through the tests, what methods are you missing? */
class ShoppingCart {
  #cartItems = [];
  static #allCarts = []
  constructor (){
  this.id = getId()
  // this.#cartItems
  }

  createItem( name , price ){
    // this.name = name 
    // this.price = price 
    const item = new CartItem(name,price);
    this.#cartItems.push(item)
    return item;
  }
  getItems(){
    return [...this.#cartItems]
  }
  getTotal(){
    let sum =  0 
    for(let item of this.#cartItems){
      sum += item.price 
    }
    return sum 
  }
  removeItem(id){
    for(let i = 0; i < this.#cartItems.length; i++){
      const item = this.#cartItems[i]
      if (item.id === id ){
        this.#cartItems.splice(i, 1)
      }
    }
  }

  static listAll(){
    /*
    FEEDBACK:
      Adding the instance to #allCarts should happen in the constructor rather that in listAll.
      This is because we want any time one is created, we want it to be added to this array. 

      We also want to return [...ShoppingCart.#allCarts] rather than this.#allCarts because it is a static property
    */
    ShoppingCart.#allCarts.push(this)
    
    return [...ShoppingCart.#allCarts]
  }

  static findBy(id){
    for(let cart of this.#allCarts){
      if (cart.id === id ){
        return cart
      }
    }
  }
}

export default ShoppingCart;