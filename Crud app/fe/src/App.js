import './App.css';
import Home from './components/Home';
import ShowData from './components/ShowData';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Popup from './components/Popup';

const App = () => {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/show' element={<Popup></Popup>}/>
          </Routes>
        </Router>
      </>

    </div>
  );
}

export default App;
