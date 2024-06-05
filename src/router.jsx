import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import MeioAmbiente from './Pages/MeioAmbiente/MeioAmbiente'
import TubAI from './Pages/TubAI/TubAI'
import Documentacao from './Pages/Documentacao/Documentacao'
import Header from './ui/Components/Header/Header'
import Footer from './ui/Components/Footer/Footer'
import ExperimentarDemo from './Pages/ExperimentarDemo/ExperimentarDemo'

function Router() {

  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/Meio-Ambiente"
          element={<MeioAmbiente />}
        />
        <Route
          path="/TubAI"
          element={<TubAI/>}
        />
        <Route
          path="/Documentacao"
          element={<Documentacao />}
        />
        <Route
          path="/Demo"
          element={<ExperimentarDemo />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
