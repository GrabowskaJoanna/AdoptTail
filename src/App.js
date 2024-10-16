import HomePage from "./pages/HomePage";
import { Route, Routes, HashRouter } from "react-router-dom";
import Pets from "./pages/Pets";
import AdoptionForm from "./pages/AdoptionForm";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/adoptionForm" element={<AdoptionForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
