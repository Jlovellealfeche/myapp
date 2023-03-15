import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header firstName="Any name other than Bob" />
      <Header firstName="Jack" />
    </div>
  );
}

export default App;
