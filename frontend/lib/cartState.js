import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

function CartStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

  // Closed cart by default
  const [cartOpen, setCartOpen] = useState(false);
  const [toggle, setToggle] = useState(false)

  function toggleCart() {
    setCartOpen(!cartOpen);
  }

  function closeCart() {
    setCartOpen(false);
    setToggle(!toggle)
  }

  function openCart() {
    setCartOpen(true);
    setToggle(!toggle)
  }

  function handleToggle () {
    setToggle(!toggle)
    setCartOpen(!cartOpen)
  }

  return (
    <LocalStateProvider
      value={{
        cartOpen,
        toggle,
        setCartOpen,
        toggleCart,
        closeCart,
        openCart,
        handleToggle,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// make a custom hook for accessing the cart local state
function useCart() {
  // We use a consumer here to access the local state
  const all = useContext(LocalStateContext);
  return all;
}
export { CartStateProvider, useCart };