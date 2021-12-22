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

  const onDelete = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }
  
  const addItem = (item, quantity) => {
    if (isInCart(item.id)) {
      setCartItems(cartItems.map(cartItem => {
        if (cartItem.id === item.id) {
          cartItem.quantity = quantity
        }
        return cartItem
      }))
    } else {
      setCartItems([...cartItems, {...item, quantity}])
    }

  }

  return (
    <CartContext.Provider value={{cartItems, addItem, clear, isInCart, onDelete, setCartItems}}>
    {children}
    </CartContext.Provider>
  )

}

export default CartProvider
