import './App.css';
import Coctails from './Component/Coctails/Coctails';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Heading from './Component/Heading/Heading';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Header></Header>
        <Heading></Heading>
        <Coctails></Coctails>
        <Footer></Footer>
      </div>
    </div>
  );
}


export default App;
