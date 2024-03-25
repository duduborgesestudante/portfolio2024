import { createBrowserRouter } from "react-router-dom"
import Home  from './pages/home'
import { PrimeiroTri } from "./pages/PrimeiroTri"
import { SegundoTri } from "./pages/SegundoTri"
import { TerceiroTri } from "./pages/TerceiroTri"
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/primeiro',
    element: <PrimeiroTri />,
  },
  {
    path: '/segundo',
    element: <SegundoTri />,
  },
  {
    path: '/terceiro',
    element: <TerceiroTri />,
  },
  

])

export { router }