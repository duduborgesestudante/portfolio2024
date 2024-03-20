import { createBrowserRouter } from "react-router-dom"
import Home  from './home'
import { PrimeiroTri } from "./PrimeiroTri"
import { SegundoTri } from "./SegundoTri"
import { TerceiroTri } from "./TerceiroTri"
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