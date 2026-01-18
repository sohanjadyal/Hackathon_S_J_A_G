import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SymptomForm from "./components/SymptomForm";
import ClinicList from "./components/ClinicList";
import Noticeboard from "./components/Noticeboard";
import Admin from "./components/Admin";

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "20px" }}>
        <h1>Rural Health Access Assistant</h1>

        <nav style={{ marginBottom: "20px" }}>
          <Link to="/">Home</Link> | <Link to="/admin">Admin</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <SymptomForm />
                <ClinicList />
                <Noticeboard />
              </>
            }
          />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
