import Header from './Components/Header'
import Slider from './Components/Slider'
import Content from './Components/Content'
import Footer from './Components/Footer'
import Item from './Components/Item'
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    
    <>
      <Header/>
      <div>
        <Routes>
          <Route path='/loho' element={<><Slider/><Content/></>}/>
          <Route path='/' element={<><Slider/><Content/></>}/>
          <Route path='/item' element={<><Item/></>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
