import getId from "../utils/getId";
import CartItem from "./CartItem";

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
    ShoppingCart.#allCarts.push(this)
    return [...this.#allCarts]
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