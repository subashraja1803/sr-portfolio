import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
