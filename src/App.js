import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Review from './components/Review/Review';
import Manage from './components/Manage-inevtory/Manage';
import Notfound from './components/Notfound/Notfound';
import Productdetail from './components/ProductDetail/Productdetail';



function App() {
 
const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render (
    <div>
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path="/Shop" element={<Shop />} />
        <Route path="/review" element={<Review />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/" element={<Shop />} /> 
        <Route path="*" element={<Notfound />} />
        <Route path="/product/:productkey" element={<Productdetail />} />
      </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
