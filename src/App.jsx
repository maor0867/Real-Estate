import {BrowserRouter,Route,Routes} from "react-router-dom"

// import {Home,Profile,SighIn,SighOut,About} from './pages'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SighIn from './pages/SighIn'
import SighUp from './pages/SighUp'
import About from './pages/About'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/sighIn" element={<SighIn/>}/>
        <Route path="/sighUp" element={<SighUp/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App
