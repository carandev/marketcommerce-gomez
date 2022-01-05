import { createContext, useState } from 'react'

export const CartContext = createContext([])

const CartProvider = ({children}) => {
  
  const [cartItems, setCartItems] = useState([])

  const isInCart = (id) => {
    return cartItems.find(item => item[1] === id)
  }

  const clear = () => {
    setCartItems([])
  }

  const onDelete = (id) => {
    setCartItems(cartItems.filter(item => item[1] !== id))
  }
  
  const addItem = (item, quantity, id) => {
    if (isInCart(id)) {
      setCartItems(cartItems.map(cartItem => {
        if (cartItem[1] === id) {
          cartItem[0].quantity = quantity
        }
        return cartItem
      }))
    } else {
      setCartItems([...cartItems, [{...item, quantity}, id]])
    }

  }

  return (
    <CartContext.Provider value={{cartItems, addItem, clear, isInCart, onDelete, setCartItems}}>
    {children}
    </CartContext.Provider>
  )

}

export default CartProvider
