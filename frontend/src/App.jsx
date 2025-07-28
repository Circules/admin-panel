import AddPage from "./pages/AddPage.jsx"
import HomePage from "./pages/HomePage.jsx"
import { Route , Routes} from 'react-router-dom';



function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/admin' element={<AddPage></AddPage>}></Route>
        
      </Routes>
    </>
  )
}

export default App
