import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Carousel from './components/ItemDetailContainer';
import Carousel from './components/ItemDetail';

function App() {
  return ( 
    <>
      <NavBar/>
      <Carousel/>
      <ItemListContainer/>
      <Footer/>
    </> 
  );
}

export default App;
