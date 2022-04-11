import TopBar from './components/TopBar';
import Background from './components/BackGround';
import Listings from './components/StoreListings';
import './App.css';


function App() {
  return (
    <div className="App">
      <TopBar />
      <Background />
      <Listings />
    </div>
  );
}

export default App;
