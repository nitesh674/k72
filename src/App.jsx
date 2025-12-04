
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar.jsx'
import FullscreenNav from './components/Navigation/FullscreenNav.jsx'
import { NavContext } from "./context/NavContext.jsx";



export default function App() {
  const [isNavOpen, setisNavOpen] = useState(false);

  return (
    <div>
      <navbarContext.Provider value={[isNavOpen, setisNavOpen]}>
      <Navbar />
      <FullscreenNav />
      </navbarContext.Provider>
      {/* <Navbar/> 
      <FullscreenNav/> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}
