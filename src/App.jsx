import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage"
import ProductsPage from "./pages/ProductsPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/zevi' element={<ProductsPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
