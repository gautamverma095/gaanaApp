import { Footer } from './components/Footer/footer';
import { Header } from './components/Header/header';
import { Route, Routes } from 'react-router-dom';
import { PlaySong } from './components/PlaySong/PlaySong';
import { DemoHome } from './components/demoHome';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path='/' element={<DemoHome/>}/> 
    <Route path='/play/:id' element={<PlaySong/>}/> 
    </Routes>     
    <Footer/>
    </div>
  );
}

export default App;
