Remember that when editing the react app 
please only delete inside the <div> 


import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
    
    >>FROM THIS AREA YOU CAN DELETE
      <Header firstName="Any name other than Bob" />
      <Header firstName="Jack" />

    >>Until Here!
    </div>
  );
}

export default App;
