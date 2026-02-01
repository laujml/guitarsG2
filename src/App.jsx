import { useState } from 'react'
import Header from './components/Header'
import Guitars from './components/Guitars'
import Footer from './components/footer'

function App() {

  const [cart, setCart] = useState([])

  function addToCart(guitar) {
    const itemExists = cart.find(item => item.id === guitar.id)

    if (itemExists) {
      const updatedCart = cart.map(item =>
        item.id === guitar.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      setCart(updatedCart)
    } else {
      setCart([...cart, { ...guitar, quantity: 1 }])
    }
  }

  function removeFromCart(id) {
    setCart(cart.filter(item => item.id !== id))
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
    setCart(updatedCart)
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
    setCart(updatedCart)
  }

  function clearCart() {
    setCart([])
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />

      <Guitars addToCart={addToCart} />

      <Footer />
    </>
  )
}

export default App