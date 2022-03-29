import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Dash from './Components/Dash/Dash';
import Integrations from './Components/Integrations/Integrations';
import Interactivity from './Components/Interactivity/Interactivity';
import News from './Components/News/News';
import Faq from './Components/Faq/Faq';
function App() {
  return (
    <>
     <NavBar/>
     <Dash/> 
     <Footer/>
     <Integrations/>
     <Interactivity/>
     <News/>
     <Faq/>
    </>
  );
}

export default App;
