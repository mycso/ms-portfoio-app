import { createContext, useContext, useState } from 'react';

const LocalStateContext = createContext();
const LocalStateProvider = LocalStateContext.Provider;

const useCheckoutMethod = () => {
    const context = useContext(LocalStateContext);
  
    if (!context) {
      throw new Error("useCheckoutMethod must be used within a CheckoutStateProvider");
    }
  
    return context;
};

function CheckoutStateProvider({ children }) {
  // This is our own custom provider! We will store data (state) and functionality (updaters) in here and anyone can access it via the consumer!

    // Closed cart by default
    // const [cartOpen, setCartOpen] = useState(false);
    // const [toggle, setToggle] = useState(false)
    const [shipName, setShipName] = useState('');
    const [shipEmail, setShipEmail] = useState('');
    const [shipPostal, setShipPostal] = useState('');
    const [shipCity, setShipCity] = useState('');
    const [shipCountry, setShipCountry] = useState('');
    const [shipLine1, setShipLine1] = useState('');
    const [shipLine2, setShipLine2] = useState('');
    const [shipState, setShipState] = useState('');
    const [shippingMethod, setShippingMethod] = useState('');
    const [paymentInfo, setPaymentInfo] = useState('');
    
    // const useCheckoutMethod = ({}) => {

        function onChangeShipName (e) {
            setShipName(e.target.value);
        }

        function onChangeShipEmail (e) {
            setShipEmail(e.target.value);
        }

        function onChangeShipPostal (e) {
            setShipPostal(e.target.value);
        }

        function onChangeShipCity (e) {
            setShipCity(e.target.value);
        }

        function onChangeShipCountry (e) {
            setShipCountry(e.target.value);
        }

        function onChangeShipLine1 (e) {
            setShipLine1(e.target.value);
        }

        function onChangeShipLine2 (e) {
            setShipLine2(e.target.value);
        }

        function onChangeShipState (e) {
            setShipState(e.target.value);
        }

        function onChangeShippingMethod (e) {
            setShippingMethod(e.target.value);
        }

  return (
    <LocalStateProvider
      value={{
        shipName,
        shipEmail,
        shipPostal,
        shipCity,
        shipCountry,
        shipLine1,
        shipLine2,
        shipState,
        shippingMethod,
        paymentInfo,
        onChangeShipName,
        onChangeShipEmail,
        onChangeShipPostal,
        onChangeShipCity,
        onChangeShipCountry,
        onChangeShipLine1,
        onChangeShipLine2,
        onChangeShipState,
        onChangeShippingMethod,
        setPaymentInfo,
        useCheckoutMethod,
      }}
    >
      {children}
    </LocalStateProvider>
  );
}

// // make a custom hook for accessing the cart local state
// function useCheckoutMethod() {
//   // We use a consumer here to access the local state
//   const all = useContext(LocalStateContext);
//   return all;
// }

export { 
    CheckoutStateProvider, 
    useCheckoutMethod
};