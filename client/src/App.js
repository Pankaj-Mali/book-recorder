import {BrowserRouter, Routes , Route} from 'react-router-dom'
import AddBook from './components/addBook';
import Home from './components/home';
import Login from './components/login';
import Register from './components/register';
import Show from './components/show';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login></Login>}>
        </Route>
        <Route path='/register' element={<Register></Register>}>
        </Route>
        <Route path='/home' element={<Home></Home>}>
        </Route>
        <Route path='/addBook' element={<AddBook/>}>
        </Route>
        <Route path='/show' element={<Show/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
