import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CartProvider from './store/CartProvider';

import Main from "./routes/Main";
import { AuthProvider } from './store/AuthProvider';

function App() {
  return (
            <AuthProvider>
              <CartProvider>
                <BrowserRouter>
                  <Main />
                </BrowserRouter>
              </CartProvider>
            </AuthProvider>
  );
};

export default App;
