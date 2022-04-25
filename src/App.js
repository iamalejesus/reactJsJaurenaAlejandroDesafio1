import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/container/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return ( 
    <>
      <NavBar/>
      <ItemListContainer/>
      <Footer/>
    </> 
  );
}

export default App;
