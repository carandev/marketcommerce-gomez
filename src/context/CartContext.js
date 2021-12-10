import { createContext, useState } from 'react'

export const CartContext = createContext([])

const CartProvider = ({children}) => {
  
  const [cartItems, setCartItems] = useState([])

  const isInCart = (id) => {
    return cartItems.find(item => item.id === id)
  }

  const clear = () => {
    setCartItems([])
  }
  
  const addItem = (item, quantity) => {
    if (!isInCart(item.id)){
     setCartItems([...cartItems, {...item, quantity}])
    }

  }

  return (
    <CartContext.Provider value={{cartItems, addItem, clear}}>
    {children}
    </CartContext.Provider>
  )

}

export default CartProvider
