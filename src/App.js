import "./App.css";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from "./pages/Home/HomePage";
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
            </Routes>
          </main>
          <Footer/>
    </div>
  );
}

export default App;
