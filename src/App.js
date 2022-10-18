import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Review from './Components/Review/Review';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import DashBord from './Components/DashBord/DashBord';

function App() {
  return (
   <div className='App'>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/review' element={<Review></Review>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/dashbord' element={<DashBord></DashBord>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>

  </div>
  );
}

export default App;
