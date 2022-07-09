// styles
import './App.css';

// pages
import Home from './pages/Home';
import Details from './pages/Details';

// react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/drink/:id" element={ <Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
