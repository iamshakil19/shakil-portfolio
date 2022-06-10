
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import PhoneCreation from './Components/Details/PhoneCreation';


function App() {

  return (
    <div data-theme="light">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/phoneCreation' element={<PhoneCreation></PhoneCreation>}></Route>
      </Routes>
    </div>
  );
}

export default App;
