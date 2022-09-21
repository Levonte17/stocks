
//PAGES IMPORT 
import Main from './pages/Main';
import Stocks from './pages/Stocks';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

//REACT-ROUTER
import { Routes, Route } from 'react-router-dom';

//IMPORT 
import './App.css'; 

//COMPONENTS IMPORT
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
        <Nav />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
            <Route path='/stocks/:symbol' element={<Stocks />} />
            <Route path='/stocks' element={<Dashboard />} />
          </Routes>
    </div>
  );
}

export default App;
