import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Promo from './components/Promo';
import Apples from './components/Apples';
import Bag from './components/Bag';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header firstName="Jack" />
      <Promo />
      <Apples />
      <Bag/>
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Footer />
    </div>
  );
}

export default App;
