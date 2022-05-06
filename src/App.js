import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemDetail from './components/ItemDetail';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return ( 
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        {/*<Carousel/>*/} 
        <Routes>
          <Route path='/ItemListContainer' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/item/:itemId' element={<ItemDetail/>}/>
        </Routes>
      </BrowserRouter>

      <Footer/>
    </> 
  );
}

export default App;
