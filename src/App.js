import React from "react";
import "./App.css";
import HomeScreen from "./Pages/HomeScreen";
import Navs from "./components/Navs";
import { Route, Routes } from "react-router-dom";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="app">
      <Navs />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
