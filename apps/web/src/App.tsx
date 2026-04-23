import { BrowserRouter, Route, Routes } from "react-router";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Yellow from "./pages/Yellow.tsx";
import DeepBlue from "./pages/DeepBlue.tsx";
import HermesAgent from "./pages/HermesAgent.tsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/yellow" element={<Yellow />} />
      <Route path="/deep-blue" element={<DeepBlue />} />
      <Route path="/hermes-agent" element={<HermesAgent />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
