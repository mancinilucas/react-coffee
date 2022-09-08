import { Routes, Route } from 'react-router-dom'

import { CheckoutProduct } from './pages/Checkout'
import { Home } from './pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<CheckoutProduct />} />
    </Routes>
  )
}
