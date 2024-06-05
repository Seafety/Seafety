import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route
          path="/Tratamento-Doencas-Nao-Transmissiveis"
          element={<TratamentoDoencasNaoTransmissiveis />}
        />
        <Route
          path="/Melhoria-Geral-Da-Saude"
          element={<MelhoriaGeralSaude />}
        />
        <Route
          path="/Prevencao-Doenca-Transmissiveis"
          element={<DoencaTransmissiveis />}
        />
        <Route path="/Mortalidade-Infatil" element={<MortalidadeInfatil />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default Router
