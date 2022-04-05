import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
import Dash from './Components/Dash/Dash';
import Integrations from './Components/Integrations/Integrations';
import Interactivity from './Components/Interactivity/Interactivity';
import News from './Components/News/News';
import Faq from './Components/Faq/Faq';
import { Route,Routes, useLocation } from 'react-router-dom';
import Typical from './Components/Typical/Typical';
import Roles from './Components/Roles/Roles';
import Info from './Components/Info/Info';
import Solve from './Components/Solve/Solve';
const Home=()=>{return (<>
     <Dash/> 
     <Integrations/>
     <Interactivity/>
     <News/>
     <Faq/>
</>)}
const About=()=>{
  return (<>
  <Info/>
  <Solve/>
  </>)
}
const Career=()=>{
  return (<>
  <Typical/>
  <Roles/>
  </>)
}
function App() {
  const location=useLocation();
  return (
    <>
     <NavBar/>
     <Routes location={location} key={location.key}>
     <Route path="/" exact element={<Home/>} />
     <Route path="/iqub/about" exact element={<About/>} />
     <Route path="/iqub/career" exact element={<Career/>} />
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
