import Index from './page/Index'

import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
