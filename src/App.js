import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import OurProducts from "./pages/ourProducts";
import PredictionPage from "./pages/PredictionPage";
import TomatoSchedulePage from "./pages/TomatoSchedulePage";
import WeatherForecastPage from "./pages/WeatherForecastPage";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-4 flex-1">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<OurProducts />} />
              <Route path="/prediction" element={<PredictionPage />} />
              <Route path="/TomatoSchedulePage" element={<TomatoSchedulePage />} />
              <Route path="/WeatherForecastPage" element={<WeatherForecastPage />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
