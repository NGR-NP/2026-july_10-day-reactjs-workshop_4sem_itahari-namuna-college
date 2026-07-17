import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactComponent, { H1 } from './pages/home'

createRoot(document.getElementById('main')!).render(
  <StrictMode>
    <ReactComponent style={{ backgroundColor: "blue" }}>
      <H1  style={{ color: "red" }} >
        Hello, it's me tezz
      </H1>
    </ReactComponent>
  </StrictMode>,
)
