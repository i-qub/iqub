import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'
// import Dash from './Components/Dash/Dash';
// import Integrations from './Components/Integrations/Integrations';
// import Interactivity from './Components/Interactivity/Interactivity';
// import News from './Components/News/News';
// import Faq from './Components/Faq/Faq';
import { Route,Routes, useLocation } from 'react-router-dom';
import Typical from './Components/Typical/Typical';
import Roles from './Components/Roles/Roles';
import Info from './Components/Info/Info';
import Solve from './Components/Solve/Solve';
import { useEffect } from 'react';
import Intro from './Components/Intro/Intro';
import Team from './Components/Team/Team';
const Home=()=>{return (<>
     <Intro/>
     {<Dash/> 
     <Integrations/>
     <Interactivity/>
     <News/>
     <Faq/>}
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
  useEffect(()=>{
    if(location.pathname==='/iqub/')
      document.title="iqub | home"
    else if(location.pathname==='/iqub/about')
      document.title="iqub | about"
    else if(location.pathname==='/iqub/career')
      document.title="iqub | career"
    else if(location.pathname==='/iqub/team')
      document.title="iqub | team"
  },[location])
  return (
    <>
     <NavBar/>
     <Routes location={location} key={location.key}>
     <Route path="/iqub/" exact element={<Home/>} />
     <Route path="/iqub/about"  element={<About/>} />
     <Route path="/iqub/career"  element={<Career/>} />
     <Route path="/iqub/team"  element={<Team/>} />
     </Routes>
     <Footer/>
    </>
  );
}

export default App;
