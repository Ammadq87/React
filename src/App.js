import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {Home} from './pages/Home';
import {Menu} from './pages/Menu';
import {Contact} from './pages/Contact';


function App() {

  return (
    <div className="App">
      <Router>

        <div>
          <Link to='/'>Home </Link>
          <Link to='/Menu'>Menu </Link>
          <Link to='/Contact'>Contact </Link>
        </div>

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<h1>Page Not Found</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;