
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Product from './Components/Product.jsx'
import { ProductProvider } from './Context/ProductContext.jsx'
import About from './Components/About.jsx'
import Terms from './Components/Terms.jsx'
import Privacy from './Components/Privacy.jsx'
import Faq from './Components/FAQ.jsx'


createRoot(document.getElementById('root')).render(
  <ProductProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/faq" element={<Faq />} />
     
    </Routes>
  </BrowserRouter>
  </ProductProvider>
)
