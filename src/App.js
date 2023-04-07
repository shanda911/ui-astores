import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './store/CartProvider';

import Main from "./routes/Main";

function App() {
  return (
            <CartProvider>
            <BrowserRouter>
              <Main />
            </BrowserRouter>
            </CartProvider>
  );
};

export default App;
