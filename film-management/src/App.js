import './App.css';
import Navigation from './Component/Navigation/Navigation';
import Main from './Component/Films/Main';
import Footer from './Component/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import Detail from './Component/Detail/Detail';
import Contact from './Component/Contact/Contact';
import About from './Component/Navigation/About';
import News from './Component/News/News';
import LoginGoogle from './Component/LoginGoogle/LoginGoogle';
import AddForm from './Component/Dashboard/AddForm';
import Homepage from './Component/Dashboard/Homepage';
import EditModal from './Component/Dashboard/EditModal';


function App() {
 
  return (
    <div className="App">
     
      <Navigation></Navigation>
      
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/login" element={<LoginGoogle />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/add" element={<AddForm />} />
        <Route path="/edit/:id" element={<EditModal />} />
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
