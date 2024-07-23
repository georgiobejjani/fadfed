import './App.scss';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import EventDetails from './Containers/EventDetails';
import Homepage from './Containers/Homepage';
import { Route, Routes } from "react-router-dom";



function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/event/:id" element={<EventDetails/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
