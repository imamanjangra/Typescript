import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux';
import {store} from './App/Shop.tsx'
import ThemePorvider from './Context/ThemeContext.tsx';
import AuthProvider from './Context/authContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemePorvider>
      <AuthProvider>
    <Provider store={store}>
    <App />
    </Provider>
      </AuthProvider>
    </ThemePorvider>
  </StrictMode>
)
