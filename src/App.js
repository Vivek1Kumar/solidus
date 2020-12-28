import logo from './logo.svg';
import './App.css';
import TopNavbar from './components/navbars/top.navbar';
import SearchNavbar from './components/navbars/search.navbar';
import Home from "./components/home/home";
import ItemsNav from "./components/navbars/itmes.navbar";
import { BrowserRouter, Route } from 'react-router-dom';
import Items from './components/items/items';
import Mugs from './components/categories/mugs'
function App() {
  return (
    <div className="App">
      <TopNavbar />
      <SearchNavbar />
      {/* <ItemsNav /> */}

      <BrowserRouter>
      <Route path="/" component={ItemsNav} />
      <Route path="/mugs" component={Mugs} />

      
      </BrowserRouter>
      <Home />
      <Items />
    </div>
  );
}

export default App;
