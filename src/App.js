import './App.css';
import Banner from './Component/Banner/Banner';
import BestProduct from './Component/BestProduct/BestProduct';
import Footer from './Component/Footer/Footer';
import Introduction from './Component/Introduction/Introduction';
import Issues from './Component/Issues/Issues';
import NavBar from './Component/NavBar/NavBar';
import ProductList from './Component/ProductList/ProductList';
import Story from './Component/Story/Story';
import Videos from './Component/Videos/Videos';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Introduction />
      <BestProduct />
      <ProductList />
      <Story />
      <Issues />
      <Videos />
      <Footer />
    </div>
  );
}

export default App;
