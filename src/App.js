import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Swipslide from './Components/Swipslide';
import Trendblog from './Components/Trendblog';
import Updatesblog from './Components/Updatesblog';

function App() {
  return (
    <div>
   <Header/>
   <Trendblog/>
   <Updatesblog/>
   <Swipslide/>
   <Footer/>
   </div>
  );
}

export default App;
