
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Home from './Components/Home/Home';
import PhoneCreation from './Components/Details/PhoneCreation';
import BiCycle from './Components/Details/BiCycle';
import Strength from './Components/Details/Strength';
import Payra from './Components/Details/Payra';




function App() {

  return (
    <div data-theme="light">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/payra' element={<Payra></Payra>}></Route>
        <Route path='/phoneCreation' element={<PhoneCreation></PhoneCreation>}></Route>
        <Route path='/bicycle' element={<BiCycle></BiCycle>}></Route>
        <Route path='/strength' element={<Strength></Strength>}></Route>
      </Routes>
    </div>
  );
}

export default App;
