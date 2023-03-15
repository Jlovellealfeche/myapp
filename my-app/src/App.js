import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Promo from './components/Promo';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header firstName="Any name other than Bob" />
      <Header firstName="Jack" />
      <Promo />
    </div>
  );
}

export default App;
