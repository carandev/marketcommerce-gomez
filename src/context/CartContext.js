import { createContext, useState } from 'react'

export const CartContext = createContext([])

const CartProvider = ({children}) => {
  
  const [cartItems, setCartItems] = useState([])

  
  const addItem = (item, quantity) => {
    let isInCart = cartItems.find(cartItem => cartItem.id === item.id)

    if (!isInCart){
     setCartItems([...cartItems, {...item, quantity}])
    }

  }

  return (
    <CartContext.Provider value={{cartItems, addItem}}>
    {children}
    </CartContext.Provider>
  )

}

export default CartProvider
