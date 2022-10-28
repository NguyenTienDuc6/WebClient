import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './page/home';
import Product from './page/product';
import Profile from './page/profile';
function App() {
  return (
    <div>
      <Router>
        <nav>
          <li>
          <Link to={'/'}>home</Link>
          </li>

          <li>
          <Link to={'/product'}>product</Link>
          </li>
          <li>
          <Link to={'/profile'}>profile</Link>
          </li>
          
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/profile' element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
