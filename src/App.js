import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import ItemList from './components/ItemList';

function App() {
  return ( 
    <>
      <NavBar/>
      <Carousel/>
      <ItemListContainer/>
      <ItemList/>
      <Footer/>
    </> 
  );
}

export default App;
