import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import ReactComponent, { H1 } from './pages/home'
// import ProductsPage from './pages/products'
import CounterPage from './pages/counter/counter'

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    {/* <ReactComponent style={{ backgroundColor: "blue" }}>
      <H1  style={{ color: "red" }} >
        Hello, it's me tezz
      </H1>
    </ReactComponent> */}
    {/* <ProductsPage/> */}
    <CounterPage/>
  </StrictMode>,
)
