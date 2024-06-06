import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import MeioAmbiente from "./Pages/MeioAmbiente/MeioAmbiente";
import TubAI from "./Pages/TubAI/TubAI";
import Documentacao from "./Pages/Documentacao/Documentacao";
import ExperimentarDemo from "./Pages/ExperimentarDemo/ExperimentarDemo";
import Layout from "./ui/Components/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route  path="/Meio-Ambiente" element={<MeioAmbiente />} />
          <Route path="/TubAI" element={<TubAI />} />
          <Route path="/Documentacao" element={<Documentacao />} />
          <Route path="/Demo" element={<ExperimentarDemo />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
