import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Work from './components/Work'
import About from './components/About'
import Project from './components/Project'
import Project2 from './components/Project2'
import Project3 from './components/Project3'
import Footer from './Footer'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
          <Route index element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="apartly-designwork" element={<Project />} />
          <Route path="bosch-spexor" element={<Project2 />} />
          <Route path="unify-app" element={<Project3 />} />
        
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
