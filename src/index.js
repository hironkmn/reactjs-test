import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Cards from "./components/Cards";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <div>
        <Header />
        <MainContent />
        <Cards />
    </div>
    
)