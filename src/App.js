import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
