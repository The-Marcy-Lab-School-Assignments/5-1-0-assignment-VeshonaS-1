import getId from "../utils/getId";

class CartItem {
  constructor(name, price, id = 1 ){
 this.id = getId()
 this.name = name 
 this.price = price 
  }

}

export default CartItem;