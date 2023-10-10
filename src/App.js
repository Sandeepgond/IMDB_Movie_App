import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import MovieList from './components/MovieList/MovieList';
import Movie from './pages/MovieDetail/Movie';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Navbar/>
         <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/movie/:id' element={ <Movie/>}/>
             <Route path='/movies/:type' element={<MovieList/>}/>
             <Route path='/*' element={ <h1>Page not found</h1>}/>
         
         </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
