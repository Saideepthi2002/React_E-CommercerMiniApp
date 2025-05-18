import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './App.css'
import App from './App.jsx'
// import Home from './pages/Home.js'
import { Provider } from 'react-redux';
import { store } from './redux/store';

import { AuthProvider } from './context/AuthContext'; 
import { ThemeProvider } from './context/ThemeContext'; 



createRoot(document.getElementById('root')).render(
  
<Provider store={store}>
  <AuthProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </AuthProvider>
</Provider>

)



// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



