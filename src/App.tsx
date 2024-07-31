import { createBrowserRouter } from "react-router-dom"



import { PrimeiroTri } from "./pages/PrimeiroTri"
import { Natureza1 } from "./pages/materias/natureza1"
import { Ppe } from "./pages/materias/ppe"
import { SegundoTri } from "./pages/SegundoTri"
import { TerceiroTri } from "./pages/TerceiroTri"
import { Manutencao } from "./pages/materias/manutencao1"
import { Modelagem1 } from "./pages/materias/modelagem1"
import { Desi1 } from "./pages/materias/desi1"
import { Matematica1 } from "./pages/materias/matematica"

import { Linguagens1 } from "./pages/materias/linguagens1"
import { Humanas1 } from "./pages/materias/humanas1"
import { BancoDeDados } from "./pages/materias/db"


const router = createBrowserRouter([

  {
    path: '/',
    element: <SegundoTri />,
  },
  {
    path: '/primeiro',
    element: <PrimeiroTri />,
  },
  {
    path: '/terceiro',
    element: <TerceiroTri />,
  },
  {
    path: '/humanas1',
    element: <Humanas1 />,
  },
  {
    path: '/linguagens1',
    element: <Linguagens1 />,
  },
  {
    path: '/natureza1',
    element: <Natureza1 />,
  },
  {
    path: '/matematica1',
    element: <Matematica1 />,
  },
  {
    path: '/desi1',
    element: <Desi1 />,
  },
  {
    path: '/modelagem1',
    element: <Modelagem1 />,
  },
  {
    path: '/manutencao1',
    element: <Manutencao />,
  },
  {
    path: '/db',
    element: <BancoDeDados />,
  },
  {
    path: '/ppe',
    element: <Ppe />,
  },


])

export default router;